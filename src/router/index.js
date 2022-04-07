import Vue from 'vue';
import VueRouter from 'vue-router';
import MainPage from '../views/main-page.vue';
import TaskDetailsPage from '../views/task-details-page';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'main-page',
    component: MainPage
  },
  {
    path: '/:task_id',
    name: 'task-details-page',
    component: TaskDetailsPage
  }
];

const router = new VueRouter({
  mode: 'history',
  routes: routes
});

export default router;
