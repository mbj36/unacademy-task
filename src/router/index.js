import Vue from 'vue';
import Router from 'vue-router';
import LandingPage from '@/components/LandingPage';
import QuizQuestion from '@/components/QuizQuestion';

import Vuetify from 'vuetify';
Vue.use(Vuetify);

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path: '/quiz',
      name: 'QuizQuestion',
      component: QuizQuestion
    }
  ]
});
