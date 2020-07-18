import Vue from "vue";
import Router from "vue-router";

import Index from "./components/Pages/Index";
import About from "./components/Pages/About";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/index",
      component: Index
    },
    {
      path: "/about",
      component: About
    }
  ]
});

