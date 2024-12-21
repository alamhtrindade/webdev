import Vue from 'vue';
import VueRouter from 'vue-router';

const HomePage = () => import('@/views/pages/HomePage.vue');
const TableUtilizadores = () => import('@/views/pages/TableUtilizadores.vue');
const FormUtilizador = () => import('@/views/pages/FormUtilizador.vue');
const FormInfoUtilizador = () =>import('@/views/pages/FormInfoUtilizador.vue');


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/utilizadores',
    name: 'utilizadores',
    component: TableUtilizadores,
  },
  {
    path: '/utilizador',
    name: 'utilizador',
    component: FormUtilizador,
  },
  {
    path: '/meus-dados',
    name: 'meus-dados',
    component: FormInfoUtilizador,
  }
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
