import Vue from 'vue'
import VueRouter from 'vue-router'
import Homepage from "../views/Homepage";
import Dashboard from "../views/Dashboard";
import Challenge from "../views/Challenge";
import Ranking from "../views/Ranking";
import Utils from "../views/Utils";
import Login from "../views/Login";
import Admin from "../views/Admin";
import ManageAccount from "../views/ManageAccount";
import ManageChalls from "../views/ManageChalls";
import NewChall from "../views/NewChall";
import ChallInfo from "../views/ChallInfo";
import NewNotice from "../views/NewNotice";
import ManageNotices from "../views/ManageNotices";
import Register from "../views/Register";

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect:'homepage'},
  { path: '/homepage', component: Homepage},
  { path: '/dashboard', component: Dashboard},
  { path: '/challenge', component: Challenge},
  { path: '/challenge/:id', component: ChallInfo},
  { path: '/ranking', component: Ranking},
  { path: '/utils', component: Utils},
  { path: '/login', component: Login},
  { path: '/register', component: Register},
  { path: '/admin', component: Admin},
  { path: '/manage/account/:id', component: ManageAccount},
  { path: '/manage/challenge/:id', component: ManageChalls},
  { path:'/manage/newchall', component: NewChall},
  { path:'/manage/newnotice', component: NewNotice},
  { path:'/manage/notice/:id', component: ManageNotices},

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
