<template>
  <div id="newsid">
    <el-row class="layout_margin">
      <el-row class="breadcrumb">
        <el-col>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">{{lang ==='cn'?$store.state.title.cn.index:$store.state.title.en.index}}</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path:'/news'}">{{lang ==='cn'?$store.state.title.cn.news:$store.state.title.en.news}}</el-breadcrumb-item>
            <el-breadcrumb-item>{{lang ==='cn'?$store.state.title.cn.news_details:$store.state.title.en.news_details}}</el-breadcrumb-item>
          </el-breadcrumb>
        </el-col>
      </el-row>
      <el-row class="newsList">
        <el-row class="title">{{newsDetail.news_title}}</el-row>
        <el-row class="content">
<!--          <el-col class="left" :span="11">-->
<!--            <img :src="newsDetail.img_detail.image_url" alt width="100%" />-->
<!--          </el-col>-->
          <el-col class="right" :span="24">
            <div class="date">
              发布时间:<span class="datespan">{{newsDetail.create_time}}</span>
            </div>
            <div class="right_content" v-html="newsDetail.news_content"></div>
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
      newsDetail: [],
      lang:'',
      id: undefined
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
    getList() {
      let para = {
        id: this.id
      };
      this.axiosGets("index/newsDetail", para, function(data) {
        console.log(data);
        this.newsDetail = data.data.data.newsDetail;
      });
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    // console.log(this.$Request.id);
    
    this.id = this.$route.query.id
    this.lang = localStorage.getItem('language')
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    // this.nextTick(() => { });
    this.getList();
    // console.log(this.$router)
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

#newsid {
  .breadcrumb {
    margin-top: 82px;

    .is-link {
      color: @typeColor;
    }
  }
  .newsList {
    margin: 80px 50px;
    font-size: 16px;
    .title {
      font-size: 16px;
      font-family: Microsoft YaHei;
      font-weight: bold;
      color: rgba(51, 51, 51, 1);
    }
    .content {
      margin-top: 50px;
      .left {
        margin-right: 20px;
      }
      .right {
        .date {
          font-size: 16px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: rgba(85, 85, 85, 1);
        }
        .right_content {
          margin-top: 30px;
          font-size: 14px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: rgba(51, 51, 51, 1);
        }
      }
    }
  }
}
</style>
