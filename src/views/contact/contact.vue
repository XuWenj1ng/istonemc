<template>
  <div id="contact">
    <div class="block">
      <img :src="$store.state.contact_banner" alt width="100%" />
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