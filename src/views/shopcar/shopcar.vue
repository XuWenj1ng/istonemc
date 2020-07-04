<template>
  <div id="shopcar">
    <div class="block" id="img">
      <img
        src="@/assets/shopcart/shopcart.png"
        alt
        class="bannerImg"
        width="100%"
        v-if="lang === 'cn'"
      />
      <img src="@/assets/shopcart/shopcart.jpg" alt class="bannerImg" width="100%" v-else/>
    </div>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script src='./shopcar.js'>
</script>

<style lang='less'>
@import "./shopcar.less";
</style>