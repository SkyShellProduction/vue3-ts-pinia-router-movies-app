const host = 'https://kinopoiskapiunofficial.tech';
const hostName = 'X-API-KEY';
const hostValue = 'bc44c90c-0245-4354-aa9c-a6ce5d0a5edd';
export class Movies {
    private date: number;
    private months: string[];
    private curYear: number;
    private curMonth: string;
    constructor(){
        this.date = new Date().getMonth();
        this.months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
        this.curYear = new Date().getFullYear();
        this.curMonth = this.months[this.date];
    }
    private fOPen = async (url: string) => {
        const res = await fetch(url, {
            headers: {
                [hostName]: hostValue
            }
        });
        if(res.ok) return res.json();
        else throw new Error(`Cannot access to ${url}`);
    }
    getTopMovies = (page = 1) => this.fOPen(`${host}/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=${page}`)
    getSoloFilm = (id: number) => this.fOPen(`${host}/api/v2.2/films/${id}`)
    getReleases = (page = 1, year = this.curYear, month = this.curMonth) => this.fOPen(`${host}/api/v2.1/films/releases?year=${year}&month=${month}&page=${page}`)
    getFrames = (id: number) => this.fOPen(`${host}/api/v2.2/films/${id}/images?type=STILL&page=1`)
    getFacts = (id: number) => this.fOPen(`${host}/api/v2.2/films/${id}/facts`)
    getReviews = (id: number) => this.fOPen(`${host}/api/v2.2/films/${id}/reviews?page=1&order=DATE_DESC`)
    getSearch = (page = 1, keyword: string) => this.fOPen(`${host}/api/v2.1/films/search-by-keyword?keyword=${keyword}&page=${page}`)
}