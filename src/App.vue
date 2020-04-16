<template>
  <div id="app">
      <side-bar></side-bar>
      <login-box id="login-center" base-width="500" base-height="600"></login-box>
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
    padding: 0;
    margin: 0;
  }
  html, body {
    height: 100%;
  }
  #app {
    position: absolute;
    height: 100%;
    width: 100%;
    background-image: linear-gradient(to bottom right, rgb(201, 115, 255), rgb(174, 186, 248));
  }
  #login-center {
    margin: 150px auto 0;
  }
</style>
