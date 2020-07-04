<template>
  <div id="newsinfo">
    <el-row class="layout_margin">
      <el-row class="breadcrumb">
        <el-col>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">{{lang ==='cn'?$store.state.title.cn.index:$store.state.title.en.index}}</el-breadcrumb-item>
            <el-breadcrumb-item>{{lang ==='cn'?$store.state.title.cn.news:$store.state.title.en.news}}</el-breadcrumb-item>
          </el-breadcrumb>
        </el-col>
      </el-row>
      <el-row class="newsList">
        <el-row v-for="item in newsList" :key="item.news_id" class="news_info" @click.native="goNewsInfo(item.news_id)">
          <el-col class="left" :span="4">
            <!-- <img src="@/assets/news/newsinfo.png" alt width="100%" /> -->
            <img :src="item.img_list.image_url" alt width="100%" />
          </el-col>
          <el-col class="right" :span="19" :offset="1">
            <div class="title">{{item.news_title}}</div>
            <el-divider></el-divider>
            <div class="date">{{item.create_time}}</div>
            <div class="content over_one_line" v-html="item.subtitle"></div>
          </el-col>
        </el-row>
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
      newsList: [],
      lang:''
    };
  },
  //监听属性 类似于data概念
  computed: {},
  // 包含 Vue 实例可用过滤器的哈希表
  filters: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    getList() {
      let para = {};
      this.axiosGets("index/news", para, function(data) {
        console.log(data);
        this.newsList = data.data.data.newsList
      });
    },
    goNewsInfo(id) {
      this.$router.push({ name:'新闻中心1',path:'/news/info',query: { id:id }})
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.lang = localStorage.getItem("language")
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    // this.nextTick(() => { });
    this.getList();
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

#newsinfo {
  .breadcrumb {
    margin-top: 82px;

    .is-link {
      color: @typeColor;
    }
  }
  .newsList {
    margin: 80px 50px;
    .news_info {
        margin-bottom: 50px;
    }
    .right {
      font-size: 16px;
      font-family: Microsoft YaHei;
      font-weight: bold;
      color: rgba(51, 51, 51, 1);
      .title {
        margin-top: 25px;
        margin-bottom: 7px;
      }
      .el-divider--horizontal {
        margin-top: 0;
        margin-bottom: 15px;
      }
      .date,
      .content {
        font-size: 14px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
      }
      .content {
        margin-top: 10px;
      }
    }
  }
}
</style>
