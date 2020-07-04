<template>
  <div id="member">
    <div class="block">
      <img :src="$store.state.member_banner" alt width="100%" align="absbottom" />
    </div>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>