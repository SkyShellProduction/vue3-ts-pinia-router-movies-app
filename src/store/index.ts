import { defineStore } from "pinia";
import { Movies } from '../assets/js/connect';
import * as types from './types';
const db = new Movies();
const random = (min: number, max: number) => Math.floor(Math.random() * (max + 1 - min) + min);
export const useMainStore = defineStore('main', {
    state: () => {
        return {
            showMobileMenu: false,
            searchData: null as types.TopMovies | null,
            mainData: {
                top: null as types.TopMovies | null,
                awaited: null as types.ReleasesMovies | null
            },
            headerData: null as types.SingleMovie | null,
            singleMovie: null as types.SingleMovie | null,
            reviews: null as types.Reviews | null,
            facts: null as types.Facts | null,
            frames: null as types.Frames | null,
            page: 1,
            maxPages: 10,
            loading: true,
            error: '',
            search: '',
            type: 'top',
            anime: 'rotate'
        }
    },
    actions: {
        setMobileMenu() {
            this.showMobileMenu = !this.showMobileMenu;
        },
        setMainData() {
            (async function () {
                const rand = random(1, 13);
                const [top, releases] = await Promise.all([
                    db.getTopMovies(rand),
                    db.getReleases()
                ]);
                return { top, releases, rand }
            }()).then(async (res) => {
                this.mainData.top = res.top as types.TopMovies;
                this.mainData.awaited = res.releases as types.ReleasesMovies;
                this.searchData = res.top as types.TopMovies;
                const rand = random(0, this.mainData.top.films.length - 1);
                const head = await db.getSoloFilm(this.mainData.top.films[rand].filmId);
                this.headerData = head;
                this.loading = false;
                this.page = res.rand;
                this.maxPages = this.mainData.top.pagesCount;
                this.error = '';
            })
                .catch(e => {
                    console.log(e);
                    this.loading = false;
                    this.error = 'Возникла Ошибка при загрузке данных';
                })

        },
        setCurPage() {
            if (this.page < this.maxPages) {
                this.page++;
            }
        },
        setSingleMovie(id: number) {
            this.loading = true;
            (async function () {
                const [reviews, frames, facts, solo] = await Promise.all([
                    db.getReviews(id),
                    db.getFrames(id),
                    db.getFacts(id),
                    db.getSoloFilm(id)
                ]);
                return { reviews, frames, facts, solo };
            }())
                .then(res => {
                    this.singleMovie = res.solo as types.SingleMovie;
                    this.reviews = res.reviews as types.Reviews;
                    const middle = res.facts.items.slice(0, 20);
                    this.facts = { ...res.facts as types.Facts, items: middle };
                    this.frames = res.frames as types.Frames;
                    this.singleMovie.countries = this.singleMovie.countries.reduce((acc: string, item: any) => acc + `${item.country} `, '')
                    this.singleMovie.genres = this.singleMovie.genres.reduce((acc: string, item: any) => acc + `${item.genre} `, '')
                    this.loading = false;
                })
                .catch(e => {
                    console.log(e);
                    this.error = 'Возникла ошибка при получении данных';
                    this.loading = false;
                })
        },
        setSearhData(data: { type: string }) {
            this.loading = true;
            db[this.type === 'top' ? 'getTopMovies' : 'getSearch'](this.page, this.search)
            .then(res => {
                this.loading = false;
                this.search = '';
                console.log(res);
                if(data.type === 'new') {
                    console.log('new');
                    this.searchData = res as types.TopMovies;
                    this.maxPages = res.pagesCount;
                    this.page = 1;
                }
                else if(data.type === 'add'){
                    console.log('add');
                    if(this.searchData?.films) {
                        this.searchData.films = [...this.searchData.films, ...res.films];
                    } 
                }
            })
            .catch(e => {
                console.log(e);
                this.error = 'Возможно возникла ошибка';
                this.loading = false;
            })
        }
    }
});