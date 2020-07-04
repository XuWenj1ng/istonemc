<template>
  <div id="footer">
    <div class="footer_content">
      <el-row>
        <el-col :span="4">
          <dl class="list">
            <dt
              class="list_title"
              @click="goUrl('/product')"
            >{{lang ==='cn'?$store.state.title.cn.index:$store.state.title.en.index}}</dt>
            <dd v-for="item in list" :key="item.id" @click="goProduct(item.id)">{{item.type_name}}</dd>
          </dl>
        </el-col>
        <el-col :span="4">
          <dl class="list">
            <dt
              class="list_title"
              @click="goUrl('/industry')"
            >{{lang ==='cn'?$store.state.title.cn.app:$store.state.title.en.app}}</dt>
            <dd
              v-for=" item in articleList"
              :key="item.article_id"
              @click="goArticle(item.article_id)"
            >{{item.article_title}}</dd>
          </dl>
        </el-col>
        <el-col :span="4">
          <dl class="list">
            <dt
              class="list_title"
              @click="goTech"
            >{{lang ==='cn'?$store.state.title.cn.tech:$store.state.title.en.tech}}</dt>
          </dl>
        </el-col>
        <el-col :span="4">
          <dl class="list">
            <dt
              class="list_title"
              @click="goUrl('/news')"
            >{{lang ==='cn'?$store.state.title.cn.news:$store.state.title.en.news}}</dt>
          </dl>
        </el-col>
        <el-col :span="4">
          <dl class="list">
            <dt
              class="list_title"
              @click="go()"
            >{{lang ==='cn'?$store.state.title.cn.company:$store.state.title.en.company}}</dt>
            <dd
              @click="go(1)"
            >{{lang ==='cn'?$store.state.title.cn.ismc:$store.state.title.en.ismc}}</dd>
            <dd
              @click="go(2)"
            >{{lang ==='cn'?$store.state.title.cn.join:$store.state.title.en.join}}</dd>
            <dd
              @click="go(3)"
            >{{lang ==='cn'?$store.state.title.cn.part:$store.state.title.en.part}}</dd>
          </dl>
        </el-col>
        <el-col :span="4">
          <dl class="list">
            <dt
              class="list_title"
              @click="goContact('/contact')"
            >{{lang ==='cn'?$store.state.title.cn.us:$store.state.title.en.us}}</dt>
          </dl>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "footerInfo",
  data() {
    //这里存放数据
    return {
      articleList: [],
      title: {},
      lang: "",
      // 产品中心 列表
      list: []
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
    go(id) {
      if (!id) {
        this.$router.push({
          path: "/company"
        });
      } else {
        this.$router.push({
          path: "/company",
          query: {
            id: id
          }
        });
      }
    },
    goTech() {
      console.log("跳转论坛");
      window.open("http://119.45.45.222:8810/");
    },

    // 跳转
    goUrl(url) {
      this.$router.push({ path: url });
    },
    goContact(url) {
      this.$router.push({ path: url });
    },
    getList() {
      let para = {};
      this.axiosGets("index/industry", para, function(data) {
        // console.log(data);
        this.articleList = data.data.data.articleList;
      });
      let para1 = {};
      this.axiosGets("index/product1", para1, function(data) {
        // console.log(data);
        this.list = data.data.data.productTypeList;
      });
    },

    // 跳转带产品详情
    goProduct(id) {
      this.$router.push({
        path: "/product/goodsinfo/type",
        query: {
          id: id
        }
      });
    },
    //  跳转到 行业应用详情
    goArticle(id) {
      this.$router.push({
        path: "/industry/electronic",
        query: {
          id: id
        }
      });
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.getList();
    // this.title = JSON.parselocalStorage.getItem("title");
    this.lang = localStorage.getItem("language");
    // console.log(this.title)
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

<style lang="less">
#footer {
  background-color: #555555;
  margin-top: 50px;

  .footer_content {
    margin: 0px 360px 0px 360px;
    font-size: 12px;
    padding-top: 63px;
    padding-bottom: 55px;
  }

  ul,
  li {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  dl {
    dt {
      font-size: 14px;
      font-family: Microsoft YaHei;
      font-weight: bold;
      color: rgba(255, 255, 255, 1);
      line-height: 18px;
      cursor: pointer;
      margin-bottom: 9px;
    }

    dd {
      font-size: 9px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      line-height: 18px;
      cursor: pointer;
      opacity: 0.5;
    }
  }
}
</style>
