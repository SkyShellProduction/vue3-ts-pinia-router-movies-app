
export interface Films {
    filmId: number,
    nameRu: string,
    nameEn: string,
    year: number,
    filmLength: string,
    countries: [
        {
            country: string
        }
    ],
    genres: [
        {
            genre: string
        },
    ],
    rating: string,
    ratingVoteCount: number,
    posterUrl: string,
    posterUrlPreview: string,
    ratingChange: null | string
};

export interface TopMovies {
    pagesCount: number,
    films: Films[],
    keyword?: string
}
export interface ReleasesMovies {
    pagesCount: number,
    releases: Films[]
}
export interface SingleMovie {
    kinopoiskId: number,
    imdbId: string,
    nameRu: string | string,
    nameEn: null | string,
    nameOriginal: null | string,
    posterUrl: string,
    posterUrlPreview: string,
    coverUrl: string,
    logoUrl: string,
    reviewsCount: number,
    ratingGoodReview: number,
    ratingGoodReviewVoteCount: number,
    ratingKinopoisk: number,
    ratingKinopoiskVoteCount: number,
    ratingImdb: number,
    ratingImdbVoteCount: number,
    ratingFilmCritics: number,
    ratingFilmCriticsVoteCount: number,
    ratingAwait: number,
    ratingAwaitCount: number,
    ratingRfCritics: null,
    ratingRfCriticsVoteCount: number,
    webUrl: string,
    year: number,
    filmLength: number,
    slogan: string | null,
    description: string | null,
    shortDescription: string | null,
    editorAnnotation: null,
    isTicketsAvailable: boolean | null,
    productionStatus: null,
    type: string,
    ratingMpaa: string,
    ratingAgeLimits: string,
    countries: [
        {
            country: string
        }
    ] | any,
    genres: [
        {
            genre: string
        },
    ] | any,
    startYear: null | number,
    endYear: null | number,
    serial: boolean | null,
    shortFilm: boolean,
    completed: boolean,
    hasImax: boolean,
    has3D: boolean,
    lastSync: string;
}
export interface Facts {
    total: number,
    items: [
        {
            text: string,
            type: string,
            spoiler: boolean
        },
    ]
}
export interface Frames {
    total: number,
    totalPages: number,
    items: [
        {
            imageUrl: string,
            previewUrl: string
        },
    ]
}
export interface Reviews {
    total: number,
    totalPages: number,
    totalPositiveReviews: number,
    totalNegativeReviews: number,
    totalNeutralReviews: number,
    items: [
        {
            kinopoiskId: number,
            type: string,
            date: string,
            positiveRating: number,
            negativeRating: number,
            author: string,
            title: string,
            description: string
        },
    ]
}