<template>
  <div id="news">
    <div class="block">
      <img src="@/assets/news/news.png" alt width="100%" v-if="lang==='cn'" />
      <img src="@/assets/news/news2.png" alt width="100%" v-else-if="lang==='en'" />
    </div>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    //这里存放数据
    return {
      lang: ""
    };
  },
  //监听属性 类似于data概念
  computed: {},
  // 包含 Vue 实例可用过滤器的哈希表
  filters: {},
  //监控data中的数据变化
  watch: {
    $route() {
      this.$router.go(0);
    }
  },
  //方法集合
  methods: {
    language() {
      let lang = localStorage.getItem("language");
      if (!lang) {
        localStorage.setItem("language", "cn");
        this.lang = "cn";
      } else {
        this.lang = lang;
        // console.log("有语言")
      }
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.language();
    //   console.log(this.$router.query)
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    // this.nextTick(() => { });
  },
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
  //import引入的组件需要注入到对象中才能使用
  components: {}
};
</script>

<style>
</style>