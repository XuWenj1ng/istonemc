<template>
  <div id="industryinfo">
    <el-row class="layout_margin">
      <el-row class="breadcrumb">
        <el-col>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">{{lang ==='cn'?$store.state.title.cn.index:$store.state.title.en.index}}</el-breadcrumb-item>
            <el-breadcrumb-item>{{lang ==='cn'?$store.state.title.cn.app:$store.state.title.en.app}}</el-breadcrumb-item>
          </el-breadcrumb>
        </el-col>
      </el-row>
      <el-row class="search">
        <el-row>
          <el-col class="title">文档搜索</el-col>
        </el-row>
        <el-row class="search_input">
          <el-col class="input" :span="19">
            <input type="text" class="input_info" placeholder="请输入关键词" v-model="input_info" />
          </el-col>
          <el-col :span="2" class="btn">
            <button @click="search()">搜索</button>
          </el-col>
        </el-row>
        <el-row class="btm">
          <el-col class="txt">（注册/登陆可查看及下载更多文档信息）</el-col>
        </el-row>
      </el-row>
      <el-row class="title">
        <el-row class="title_info">
          <h4>{{lang ==='cn'?$store.state.title.cn.appTitle:$store.state.title.en.appTitle}}</h4>
        </el-row>
        <el-row
          class="content"
        >{{lang ==='cn'?$store.state.title.cn.appContent:$store.state.title.en.appContent}}</el-row>
      </el-row>
      <el-row class="industry_list">
        <el-col
          class="list_info"
          :span="11"
          v-for="item in articleList"
          :key="item.article_id"
          @click.native="goInfo(item.article_id)"
        >
          <img :src="item.img_class.image_url" alt width="100%" align="absbottom" />
          <div class="img_txt">{{item.article_title}}</div>
        </el-col>
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
      articleList: [],
      input_info: "",
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
      this.axiosGets("index/industry", para, function(data) {
        console.log(data);
        this.articleList = data.data.data.articleList;
      });
    },
    search() {
      if (this.input_info) {
        this.$router.push({
          name: "search1",
          params: { name: this.input_info }
        });
      } else {
        this.$message({
          showClose: true,
          message: "请输入内容",
          type: "error"
        });
      }
    },
    goInfo(id) {
      this.$router.push({
        path: "/industry/electronic?id=" + id,
        query: { id: id }
      });
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

#industry {
  .breadcrumb {
    margin-top: 82px;

    .is-link {
      color: @typeColor;
    }
  }

  .search {
    height: 240px;
    margin-top: 90px;
    background-image: url("../assets/industry/bgImg.png");
    .title {
      margin-top: 40px;
      font-size: 18px;
      font-family: Microsoft YaHei;
      font-weight: bold;
      color: rgba(255, 255, 255, 1);
      text-align: center;
    }
    .search_input {
      // height: 100px;
      font-size: 16px;
      margin-top: 35px;
      margin-bottom: 15px;
    }
    .input {
      margin-left: 30px;
      .input_info {
        padding-left: 20px;
        box-sizing: border-box;
        height: 36px;
        border: 1px solid rgba(255, 255, 255, 1);
        background: none;
        width: 100%;
        color: #fff;
      }
    }
    .btn button {
      height: 36px;
      background: rgba(205, 0, 7, 1);
      color: #fff;
      margin-left: 20px;
      width: 80px;
      border: none;
    }
    .btm {
      margin-left: 30px;
    }
    .btm > .txt {
      font-size: 12px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
    }
  }
  .title {
    font-size: 16px;
    text-align: center;
    margin-top: 80px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
  }
  .industry_list {
    margin-top: 70px;
    .list_info {
      margin-right: 30px;
      margin-bottom: 45px;
      .img_txt {
        padding-left: 20px;
        height: 70px;
        line-height: 70px;
        background: rgba(205, 0, 7, 1);
        font-size: 20px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
      }
    }
  }
}
</style>
