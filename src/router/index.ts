import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
const Home = () => import('../views/Home.vue');
const MovieSingle = () => import('../views/MovieSingle.vue');
const Movies = () => import('../views/Movies.vue');
const Error = () => import('../views/Error.vue');

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/movies',
    name: 'movies',
    component: Movies
  },
  {
    path: '/movies/:id',
    name: 'moviessingle',
    component: MovieSingle
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'errorpage',
    component: Error
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
