<template>
  <div id="breadcrumb">
    <el-row>
      <el-col>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">{{lang ==='cn'?$store.state.title.cn.index:$store.state.title.en.index}}</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/product' }">{{lang ==='cn'?$store.state.title.cn.pro:$store.state.title.en.pro}}</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/product/goodsinfo/type?id='+type_id}">{{typename}}</el-breadcrumb-item>
          <el-breadcrumb-item>{{goodsName}}</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    //这里存放数据
    return {
      goodsinfo: "",
      goodsName:'',
      id:undefined,
      lang:'',
      type_id:undefined,
      typename:undefined
    };
  },
  //监听属性 类似于data概念
  computed: {},
  // 包含 Vue 实例可用过滤器的哈希表
  filters: {},
  //监控data中的数据变化
  watch: {
    $route() {
      //要处理的操作
      this.getQuery(this.$route.path);
      //   console.log()
    }
  },
  //方法集合
  methods: {
    getQuery(str) {
      var index = str.lastIndexOf("/");
      this.goodsinfo = str.substring(index + 1, str.length);
    },
    getList() {
      let para = { id : this.id};
      this.axiosGets("index/productdetail", para, data => {
        // console.log(this.goodsName)
        this.goodsName = data.data.data.productDetail.title
        this.type_id = data.data.data.productDetail.type_id
        // console.log(data.data.data.productDetail.title);
      });
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.getQuery(this.$route.path);
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    // this.nextTick(() => { });
    // 获取到 Url query
    // console.log(this.$route.query.id);
    this.id = this.$route.query.id
    this.typename = localStorage.getItem('typeName');
    // console.log(this.$route.params)
    this.getList()
    // this.getQuery(this.$route.path);
  },
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {
    this.getList()
    // this.getQuery(this.$route.path);
    // this.$forceUpdate()
  }, //如果页面有keep-alive缓存功能，这个函数会触发
  //import引入的组件需要注入到对象中才能使用
  components: {}
};
</script>

<style lang='less'>
</style>