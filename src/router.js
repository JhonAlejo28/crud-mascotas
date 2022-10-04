import Vue from "vue";
import Router from "vue-router";

// import Home from "./views/Home";
import Login from "./views/myLogin";
// import Register from "./views/Register";
import PetsList from "./views/PetsList";
import Pets from "./views/Pets";
import AddPet from "./views/AddPet";

Vue.use(Router);

const routes = [
  // { path: "/", component: Home },
  { path: "/", component: Login },
  { path: "/login", component: Login },
  // { path: "/register", component: Register },
  { path: "/pets", component: PetsList },
  { path: "/add", component: AddPet },
  { path: "/pets/:id", component: Pets }
];
 const router = new Router({
  routes
});

