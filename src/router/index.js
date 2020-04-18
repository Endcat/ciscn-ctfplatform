import Vue from 'vue'
import VueRouter from 'vue-router'
import Homepage from "../views/Homepage";
import Dashboard from "../views/Dashboard";
import Challenge from "../views/Challenge";
import Ranking from "../views/Ranking";
import Utils from "../views/Utils";
import Login from "../views/Login";
import Admin from "../views/Admin";

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect:'homepage'},
  { path: '/homepage', component: Homepage},
  { path: '/dashboard', component: Dashboard},
  { path: '/challenge', component: Challenge},
  { path: '/ranking', component: Ranking},
  { path: '/utils', component: Utils},
  { path: '/login', component: Login},
  { path: '/admin', component: Admin}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
