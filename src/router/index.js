import Vue from "vue";
import Router from "vue-router";

import Home from "../views/Home.vue";
import KanbanComponent from "../views/kanban/KanbanComponent.vue";

Vue.use(Router);

const routes = [
  {
    name: "home",
    path: "/",
    component: Home,
  },
  {
    name: "kanban",
    path: "/kanban",
    component: KanbanComponent,
  },
];

const router = new Router({ routes });

export { router };
