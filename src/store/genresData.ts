import { defineStore } from "pinia";
export const useGenresStore = defineStore('genres', {
    state: () => {
        return {
            genresData: [
                {
                    name: 'Romance',
                    img: require('@/assets/images/hearts.svg')
                },
                {
                    name: 'Drama',
                    img: require('@/assets/images/cinema.svg')
                },
                {
                    name: 'Historical',
                    img: require('@/assets/images/documentary.svg')
                },
                {
                    name: 'Action',
                    img: require('@/assets/images/killer.svg')
                },
                {
                    name: 'Sci-Fi',
                    img: require('@/assets/images/rocket.svg')
                },
                {
                    name: 'Horror',
                    img: require('@/assets/images/ghost.svg')
                },
                {
                    name: 'Comedy',
                    img: require('@/assets/images/smile.svg')
                },
                {
                    name: 'Documentary',
                    img: require('@/assets/images/castle.svg')
                },
            ]
        }
    }
});