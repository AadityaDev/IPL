import Vue from 'vue';
import Vuesax from 'vuesax';
import 'vuesax/dist/vuesax.css'; // Vuesax styles

// import Papa from 'papaparse';

import Router from 'vue-router';
import Home from './views/dashboard/Home.vue';
import PlayerCard from './views/dashboard/PlayerCard.vue';
import TeamCard from './views/dashboard/TeamCard.vue';

Vue.use(Router);
Vue.use(Vuesax);
// Vue.use(Papa);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'homee',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/home/player',
          name: 'player',
          component: PlayerCard,
        },
        {
          path: 'home/team',
          name: 'team',
          component: TeamCard,
        },
      ],
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});
