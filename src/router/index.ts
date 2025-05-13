import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import PlayerSelect from '@/components/PlayerSelect.vue';
import TeamDeatil from '@/components/Mom_Team_Detail.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/playerselect',
    name: 'playerselect',
    component: PlayerSelect,
  },
  {
    path: '/team-detail/:routeName',
    name: 'TeamDetail',
    component: TeamDeatil,
    props: true, // 라우터가 params를 props로 전달
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
