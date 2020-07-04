<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "App",
  components: {
    // HelloWorld
  }
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
  max-width: 1920px;
  min-width: 1600px;
  // width: 1920px;
  margin: 10px auto;
  /* height: 130px; */
}
html {
  font-size: 12px;
}
* {
  -moz-user-select: -moz-none;

  -moz-user-select: none;

  -o-user-select: none;

  -khtml-user-select: none;

  -webkit-user-select: none;

  -ms-user-select: none;

  user-select: none;
}
</style>
