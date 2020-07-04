<template>
  <div class="layout">
    <header-info></header-info>
    <!-- <keep-alive>
      <router-view />
    </keep-alive>-->
    <transition>
      <router-view></router-view>
    </transition>
    <footer-info></footer-info>
  </div>
</template>

<script src="./index.js"></script>

<style lang="less" scoped>
@import "./index.less";
</style>