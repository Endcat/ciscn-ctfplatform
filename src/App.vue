<template>
  <div id="app">
      <login-box base-width="500" base-height="600"></login-box>
  </div>
</template>

<script>
  import loginBox from "./components/loginBox";
  export default {
    name: 'app',
    components: {
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
</style>
