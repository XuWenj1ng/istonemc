<template>
  <div id="header">
    <el-row type="flex" class="row-bg" justify="space-between">
      <el-col :span="5">
        <div class="left">
          <img src="@/assets/header/logo.png" alt class="logo" />
        </div>
      </el-col>
      <el-col :span="6" :offset="9">
        <!-- <el-input placeholder="Sapphire系列" suffix-icon="el-icon-search" v-model="input1" size="small"></el-input> -->
        <input
          type="text"
          placeholder="search"
          class="search"
          @keyup.enter="submit"
          v-model="search"
        />
      </el-col>
      <el-col :span="2">
        <el-row class="language">
          <el-col
            :span="12"
            :class=" lang ==='cn'?'lang_left lang_active':'lang_left' "
            @click.native="langChange('cn')"
          >CN</el-col>
          <el-col
            :span="12"
            :class=" lang === 'en'?'lang_right lang_active':'lang_right'"
            @click.native="langChange('en')"
          >EN</el-col>
        </el-row>
      </el-col>
      <el-col :span="4" class="login_right">
        <div class="right">
          <img
            src="@/assets/header/people.png"
            alt
            class="people"
            align="middle"
            @click="goMember"
            @mouseenter="enterLogin"
          />
          <div class="name over_one_line" v-show="nameTrue" @click="goMember">{{name}}</div>
          <img src="@/assets/header/cart.png" alt class="cart" align="middle" @click="goShopCart" />
        </div>
        <div class="login" v-show="login_show" @mouseenter="enterLogin" @mouseleave="leaveLogin">
          <el-row v-show="loginOver === false">
            <el-row>
              <el-form :model="form" status-icon label-width="70px" class="demo-ruleForm">
                <el-form-item :label="lang ==='cn'? '用户名':'username'" prop="name">
                  <el-input v-model.number="form.username"></el-input>
                </el-form-item>
                <el-form-item :label="lang ==='cn'? '密码':'password'" prop="pass">
                  <el-input type="password" v-model="form.password" autocomplete="off"></el-input>
                </el-form-item>
              </el-form>
            </el-row>
            <el-row type="flex" class="row-bg" justify="end">
              <el-col :span="10" class="now" @click.native="goSign">
                <span v-if="lang === 'cn'">现在注册</span>
                <span v-else-if="lang==='en'">Register now</span>>
              </el-col>
              <el-button @click="login(form)">
                <span v-if="lang === 'cn'">登陆</span>
                <span v-else-if="lang === 'en'">Sign in</span>
              </el-button>
            </el-row>
            <el-row>
              <el-col class="btm">
                <span v-if="lang === 'cn'">注册用户可以查看及下载更多专业文档</span>
                <span
                  v-else-if="lang ==='en'"
                >Registered users can view and download more professional documents</span>
              </el-col>
            </el-row>
          </el-row>
          <el-row v-show="loginOver == true">
            <el-row>
              <el-row class="loginOverName">{{name}},{{lang === 'cn'?'您好！':"Hello!"}}</el-row>
              <el-row class="loginOver_btn" type="flex" justify="center">
                <el-button @click="exit()">
                  <span v-if="lang === 'cn'">登出</span>
                  <span v-else-if="lang === 'en'">Exit</span>
                </el-button>
              </el-row>
            </el-row>
          </el-row>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <!-- <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        router
      >
        <el-menu-item>1</el-menu-item>
        <template v-for="(item,index) in $router.options.routes" :index="index" slot="title" icon="el-icon-search">
          <el-submenu :index="index" :key="index">
            <template slot="title" v-for="(item1,i) in item.children" :index="i+''">{{item1}}</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
        </template>

        <el-menu-item index="3" disabled>消息中心</el-menu-item>
        <el-menu-item index="4">
          <a href="https://www.ele.me" target="_blank">订单管理</a>
        </el-menu-item>
      </el-menu>-->

      <el-menu
        :default-active="defaultActive"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        router
        text-color="#555555"
        active-text-color="#fff"
      >
        <!-- <template v-for="item in $router.options.routes"> -->
        <!-- <template v-for="child in item.children"> -->
        <!-- <template v-if="child.children"> -->
        <el-menu-item index="/index">
          <span
            slot="title"
          >{{lang ==='cn'?$store.state.title.cn.index:$store.state.title.en.index}}</span>
        </el-menu-item>
        <el-submenu index="/product" popper-class="menu_list" @click.native="goUrl('/product')">
          <template
            slot="title"
          >{{lang ==='cn'?$store.state.title.cn.pro:$store.state.title.en.pro}}</template>
          <!-- <el-menu-item :index="'/product/goodsinfo?id='+list[0].id">{{list[0].type_name}}</el-menu-item> -->
          <!-- <el-menu-item :index="'/product/goodsinfo?id='+list[1].id">{{list[1].type_name}}</el-menu-item> -->
          <!-- <el-menu-item :index="'/product/goodsinfo?id='+list[2].id">{{list[2].type_name}}</el-menu-item> -->
          <el-menu-item
            v-for="item in list"
            :index="'/product/goodsinfo/type?id='+item.id"
            :key="item.id"
          >{{item.type_name}}</el-menu-item>
          <el-menu-item index="/product/application">Application Studio</el-menu-item>
          <div class="left"></div>
        </el-submenu>
        <el-submenu index="/industry" popper-class="menu_list" @click.native="goUrl('/industry')">
          <template
            slot="title"
          >{{lang ==='cn'?$store.state.title.cn.app:$store.state.title.en.app}}</template>
          <el-menu-item
            v-for="item in articleList"
            :index="'/industry/electronic?id='+item.article_id"
            :key="item.id"
          >{{item.article_title}}</el-menu-item>
          <div class="left"></div>
        </el-submenu>
        <!-- <el-menu-item index="/product">
          <span slot="title">产品中心</span>
        </el-menu-item>-->
        <el-menu-item index="/news">
          <span slot="title">{{lang ==='cn'?$store.state.title.cn.news:$store.state.title.en.news}}</span>
        </el-menu-item>
        <!-- <el-menu-item index="/company">
          <span slot="title">公司介绍</span>
        </el-menu-item>-->
        <el-submenu index="/company" popper-class="menu_list" @click.native="goUrl('/company')">
          <template
            slot="title"
          >{{lang ==='cn'?$store.state.title.cn.company:$store.state.title.en.company}}</template>
          <el-menu-item
            :index="'/company?id=1'"
          >{{lang ==='cn'?$store.state.title.cn.ismc:$store.state.title.en.ismc}}</el-menu-item>
          <el-menu-item
            :index="'/company?id=2'"
          >{{lang ==='cn'?$store.state.title.cn.join:$store.state.title.en.join}}</el-menu-item>
          <el-menu-item
            :index="'/company?id=3'"
          >{{lang ==='cn'?$store.state.title.cn.part:$store.state.title.en.part}}</el-menu-item>
          <div class="left"></div>
        </el-submenu>
        <el-menu-item index="/contact">
          <span slot="title">{{lang ==='cn'?$store.state.title.cn.us:$store.state.title.en.us}}</span>
        </el-menu-item>

        <!-- </template> -->

        <!-- <template v-else>
              <el-submenu
                :index="child.path"
                v-for="child in item.children"
                :key="child"
                popper-class="menu_list"
              >
                <template slot="title">下拉</template>
                <el-menu-item index="/index3">选项1</el-menu-item>
                <el-menu-item index="2-4-2">选项2</el-menu-item>
                <el-menu-item index="2-4-3">选项3</el-menu-item>
                <div class="left"></div>
              </el-submenu>
        </template>-->
        <!-- </template>
        </template>-->
      </el-menu>
    </el-row>
  </div>
</template>

<script >
export default {
  name: "headerInfo",
  data() {
    //这里存放数据
    return {
      activeIndex: "/index",
      list: [],
      form: {},
      login_show: false,
      lang: "",
      search: "",
      articleList: [],
      title: {},
      name: "ojbk111111",
      nameTrue: true,
      loginOver: true
    };
  },
  //监听属性 类似于data概念
  computed: {
    activeName() {
      var path = this.$route.path;
      return path;
    },
    defaultActive() {
      return "/" + this.$route.path.split("/").reverse()[0];
    }
  },
  // 包含 Vue 实例可用过滤器的哈希表
  filters: {},
  //监控data中的数据变化
  watch: {
    "$store.state.username": function() {
      // deep:true
      console.log(this.$store.state.username);
      if (this.$store.state.username) {
        this.nameTrue = true;
        this.name = this.$store.state.username;
      } else {
        this.nameTrue = false;
      }
    }
  },
  //方法集合
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      //   let para = {};
      //   this.axiosGets("index/product", para, function(data) {
      //     console.log(data);

      //     this.productTypeList = data.data.data.productTypeList;
      //   });
      //   this.$router.replace("/product/goodsinfo?goodsinfo=Sapphire");
    },
    // languagesTitle() {
    //   // Index/Products/Application Areas/News/Company/Contact Us/ISMC/Join Us/Partners
    //   console.log(this.$store.state.title.cn.index)
    //   localStorage.setItem("title", JSON.stringify(title));
    //   this.title = title;
    //   console.log(title);
    // },
    //
    goUrl(url) {
      console.log(url);
      this.$router.push({ path: url });
    },

    goMember() {
      // let token = localStorage.getItem("token");

      if (this.is_login()) {
        // this.$router.push("/member/revamp");
        this.login_show = true;
        this.loginOver = true;
      } else {
        this.login_show = true;
        this.loginOver = false;
        console.log("没登录");
      }

      // console.log("登录  进入会员页面");
    },
    goShopCart() {
      console.log(this.is_login(1));
      if (this.is_login(1) == true) {
        this.$router.push("/shoppingcar");
        // console.log("header.cart");
      } else {
        this.$message({
          message: "请先登录！",
          type: "success"
        });
      }
    },

    goSign() {
      this.login_show = false;
      this.$router.push("/sign/info");
    },
    submit() {
      console.log(this.search);
    },
    // 改变语言
    langChange(val) {
      localStorage.setItem("language", val);
      this.lang = localStorage.getItem("language");
      // console.log(1)
      setTimeout(() => {
        this.$router.go(0);
      }, 500);
      // console.log(this.lang)
    },
    //  鼠标 进入 离开事件 （ 会员登录弹框 ）
    enterLogin() {
      // console.log()
      // let token = localStorage.getItem("token");
      // if (!token) {
      //   this.login_show = true;
      // }
    },
    leaveLogin() {
      setTimeout(() => {
        this.login_show = false;
      }, 1000);
    },
    getList() {
      let para = {};
      this.axiosGets("index/product1", para, function(data) {
        // console.log(data);
        this.list = data.data.data.productTypeList;
        this.$store.commit(
          "update",
          data.data.data.headImage[0].image_info.image_url
        );
      });

      this.axiosGets("index/industry", {}, function(data) {
        // console.log(data);
        this.articleList = data.data.data.articleList;
        this.$store.commit(
          "update_industry",
          data.data.data.headImage[0].image_info.image_url
        );
      });
    },

    //  登录
    login(form) {
      let para = {
        form
      };
      this.axiosPost("index/login", para.form, data => {
        console.log(data);
        if (!data.data.code == 1) {
          this.$message({
            showClose: true,
            message: data.data.msg,
            type: "error"
          });
        } else {
          this.$message({
            showClose: true,
            message: data.data.msg,
            type: "success"
          });
          this.name = form.username;
          this.$store.commit("update_username", form.username);
          localStorage.setItem("token", data.data.data.token);
          localStorage.setItem(
            "member_info",
            JSON.stringify(data.data.data.member_info)
          );
          this.login_show = false;
          this.nameTrue = true;
          // this.$router.push("/member/revamp");
        }
        // if (data.data.code === 1) {
        //   this.$message({
        //     message: data.data.msg,
        //     type: "success"
        //   });
        //   localStorage.setItem("token", data.data.data.token);
        //   localStorage.setItem(
        //     "member_info",
        //     JSON.stringify(data.data.data.member_info)
        //   );
        //   // console.log(JSON.parse(localStorage.getItem("member_info")).admin_id)
        // } else {
        //   this.$message({
        //     message: data.data.msg,
        //     type: "error"
        //   });
        // }
      });

      this.techLogin(form);
    },

    //  论坛登录
    techLogin(data) {
      console.log(data);
      let para = {
        email: "admin",
        password: "e10adc3949ba59abbe56e057f20f883e"
      };
      this.axiosPostUrl(
        "http://119.45.45.222:8810/user-login.htm?XDEBUG_SESSION_START=11671",
        para,
        data1 => {
          console.log(data1);
        }
      );
    },

    //  Exit  退出登录
    exit() {
      localStorage.removeItem("member_info");
      localStorage.removeItem("token");
      this.name = "";
      this.$store.commit("update_username", "");
      this.loginOver = false;
      this.is_login();
      // var that = this
      if (this.is_login() == false) {
        var msg = this.lang == "cn" ? "退出成功！" : "Exit the success!";
        // if (this.lang === "cn") {
        //   msg = "退出成功！"
        // } else {
        //   msg = "Exit the success!"
        // }
        this.$message({
          message: msg,
          type: "success"
        });
        console.log(1);
      } else {
        this.$message({
          message: "退出失败",
          type: "error"
        });
      }
    },
    // 判断是否登录
    is_login() {
      let member_info = localStorage.getItem("member_info");
      var flag;
      // console.log(typeof(member_info) === 'string')
      if (typeof member_info === "string") {
        this.nameTrue = true;
        console.log("登录了");
        flag = true;
        return flag;
      } else {
        this.nameTrue = false;
        flag = false;
        return flag;
      }
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    setTimeout(() => {
      this.lang = localStorage.getItem("language");
    }, 500);
    this.is_login();
    // console.log(JSON.parse(localStorage.getItem('member_info')))
    let name = JSON.parse(localStorage.getItem("member_info")).username;
    this.name = name;
    this.$store.commit("update_username", name);
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    // this.nextTick(() => { });
    // console.log(this.$route);
    // console.log(this.$router.options.routes[0].children[0].children);
    this.getList();
    // this.languagesTitle();
    // console.log(1);
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
@typeColor: #c90007;
#header {
  font-size: 12px;
  margin: 0px 360px 0px 360px;
  .logo {
    width: 36px;
    height: 29px;
  }
  .search {
    width: 180px;
    height: 24px;
    font-size: 1rem;
    padding-left: 10px;
    box-sizing: border-box;
  }
  .language {
    //   float: left;.
    .lang_left,
    .lang_right {
      height: 24px;
      width: 24px;
      line-height: 24px;
      text-align: center;
    }
    .lang_active {
      background-color: #c90007;
      color: white;
    }
  }
  .login_right {
    position: relative;
    .login {
      position: absolute;
      left: -50px;
      top: 50px;
      width: 300px;
      height: 200px;
      background-color: #fff;
      z-index: 1000;
      padding: 40px;
      color: #555555;
      box-shadow: 0px 0px 11px 2px rgba(19, 19, 19, 0.07);
      .now {
        font-size: 16px;
        line-height: 35px;
      }
      .btm {
        font-size: 14px;
        text-align: center;
        line-height: 70px;
      }
      .loginOverName {
        margin-top: 10px;
        text-align: center;
        font-size: 20px;
      }
      .loginOver_btn {
        margin-top: 30px;
      }
      .el-input__inner:focus {
        border-color: @typeColor;
      }
      .el-button {
        // background-color: @typeColor;
        border-color: @typeColor;
        border-radius: 0;
        height: 35px;
        width: 100px;
        line-height: 11px;
      }
      .el-button:focus,
      .el-button:hover {
        color: @typeColor;
        background-color: #fff;
      }
      .el-button--primary {
        background-color: @typeColor;
        border-color: @typeColor;
        border-radius: 0;
        height: 35px;
        width: 100px;
        line-height: 11px;
      }
    }
  }

  .right {
    line-height: 120%;
    img {
      vertical-align: middle;
      float: left;
    }
    .name {
      float: left;
      width: 70px;
      text-align: center;
      font-size: 16px;
      line-height: 24px;
      padding-right: 10px;
      box-sizing: border-box;
    }
  }

  .people {
    height: 24px;
    width: 22px;
    margin-right: 8px;
  }
  .cart {
    height: 24px;
    width: 26px;
  }
  .el-menu.el-menu--horizontal {
    border-bottom: none;
  }
  .el-menu .el-menu-item span {
    width: 76px;
    height: 30px;
    display: inline-block;
    line-height: 30px;
    text-align: center;
  }
  .el-menu .is-active span {
    background-color: @typeColor;
  }
  .el-menu .is-active {
    border: none;
  }
  .el-menu--horizontal > .el-menu-item {
    border: none;
  }
}
//    导航栏 下拉菜单样式
.menu_list {
  background-color: rgba(0, 0, 0, 0.5);
  top: 93px;
  //   border-radius: 20px;
  //   opacity: 0.1;
  .el-menu {
    background-color: transparent;
  }
  .el-menu-item {
    background-color: transparent !important;
    color: #ffffff !important;
  }
  .el-menu-item:hover {
    color: @typeColor !important;
  }
  .el-menu--collapse .el-menu .el-submenu,
  .el-menu--popup {
    min-width: 125px;
  }

  .left {
    // height: 10px;
    // width: 10px;
    // background-color: red;
    position: absolute;
    top: -13px;
    left: 50%;
    // margin-left: 110px;
    float: left;
    width: 0;
    height: 0;
    border-width: 8px;
    border-style: solid;
    border-color: transparent rgba(0, 0, 0, 0.5) transparent transparent;
    transform: rotate(90deg) translate(-50%, 50%); /*顺时针旋转90°*/
    // transform: ;
    .left {
      position: absolute;
    }
    .left:before,
    .left:after {
      position: absolute;
      content: "";
      border-top: 10px transparent dashed;
      border-left: 10px transparent dashed;
      border-bottom: 10px transparent dashed;
      border-right: 10px #fff solid;
    }
    .left:before {
      border-right: 10px #0099cc solid;
    }
    .left:after {
      left: 1px; /*覆盖并错开1px*/
      border-right: 10px #fff solid;
    }

    // ------------------  箭头
  }
}
</style>