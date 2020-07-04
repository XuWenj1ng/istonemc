<template>
  <div id="industry">
    <div class="block" id="img">
      <img :src="$store.state.industry_banner" alt class="bannerImg" width="100%" />
    </div>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script src='./industry.js'>
</script>

<style lang='less'>
@import "./industry.less";
</style>