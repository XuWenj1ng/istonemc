<template>
  <div id="electronic">
    <el-row class="layout_margin">
      <el-row class="breadcrumb">
        <el-col>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path:'/industry'}">行业应用</el-breadcrumb-item>
            <el-breadcrumb-item>{{articleDetail.article_title}}</el-breadcrumb-item>
          </el-breadcrumb>
        </el-col>
      </el-row>
      <el-row class="title">
        <el-row>
          <h3>{{articleDetail.article_title}}</h3>
        </el-row>
      </el-row>
      <el-row class="content">
        <el-col :span="11" class="left">
          <img :src="articleDetail.img_detail.image_url" alt width="100%" />
        </el-col>
        <el-col :span="11" class="right" :offset='1' v-html="articleDetail.article_content"></el-col>
      </el-row>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    //这里存放数据
    return {
        id: undefined,
        articleDetail:[], 
    };
  },
  //监听属性 类似于data概念
  computed: {},
  // 包含 Vue 实例可用过滤器的哈希表
  filters: {},
  //监控data中的数据变化
  watch: {
      "$router"() {
      //   location.reload();
      this.$router.go(0);
    }
  },
  //方法集合
  methods: {
      getList(){
          let para ={
              id:this.id
          }
          this.axiosGets('index/industryDetail',para, function(data) {
              console.log(data);
              this.articleDetail = data.data.data.articleDetail
          })
      }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    // this.id = this.$Request.id;
    this.id = this.$route.query.id
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    // this.nextTick(() => { }); 
    // this.id= this.$route.query.id
    this.getList()
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

<style lang='less'>
@typeColor: #c90007;

#electronic {
  .breadcrumb {
    margin-top: 82px;

    .is-link {
      color: @typeColor;
    }
  }
  .title {
    margin-top: 55px;
    h3 {
      font-size: 20px;
      font-family: Microsoft YaHei;
      font-weight: bold;
      color: rgba(85, 85, 85, 1);
    }
  }
  .content {
    margin-top: 55px;
    margin-left: 20px;
    .right {
      margin-top: 40px;
      font-size: 16px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(85, 85, 85, 1);
    }
  }
}
</style>