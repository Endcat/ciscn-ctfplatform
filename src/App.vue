<template>
  <div id="app">
      <div id="side-view">
          <side-bar></side-bar>
      </div>
      <div id="main-view">
          <transition mode="out-in">
              <router-view></router-view>
          </transition>
      </div>
  </div>
</template>

<script>
  import loginBox from "./components/loginBox";
  import SideBar from "./components/sideBar";
  export default {
    name: 'app',
    components: {
        SideBar,
      loginBox,
    }
  }
</script>

<style>
  * {
      position: relative;
      padding: 0;
      margin: 0;
  }
  html, body {
    height: 100%;
  }
  #side-view{
      display: inline-block;
      width:10%;
      height: 100%;
      float: left;
  }
  #main-view{
      display:inline-block;
      width:90%;
      height: 100%;
      float: right;
  }
  #app {
    height: 100%;
    width: 100%;
    background-image: linear-gradient(to bottom right, rgb(201, 115, 255), rgb(174, 186, 248));
  }
  .v-enter{
      opacity: 0;
  }
  .v-enter-active{
      transition: 0.2s;
  }
  .v-enter-to{
      opacity: 1;
  }
  .v-leave{
      opacity: 1;
  }
  .v-leave-to{
      opacity:0;
  }
  .v-leave-active{
      transition: 0.2s;
  }
    a {
        text-decoration: none;
    }
</style>
