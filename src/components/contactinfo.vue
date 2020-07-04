<template>
  <div id="contactinfo">
    <el-row class="layout_margin">
      <el-row class="breadcrumb">
        <el-col>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">{{lang ==='cn'?$store.state.title.cn.index:$store.state.title.en.index}}</el-breadcrumb-item>
            <el-breadcrumb-item>{{lang ==='cn'?$store.state.title.cn.us:$store.state.title.en.us}}</el-breadcrumb-item>
          </el-breadcrumb>
        </el-col>
      </el-row>
      <el-row class="content">
        <el-col :span="11" class="left">
          <div class="title">{{lang ==='cn'?$store.state.title.cn.online:$store.state.title.en.online}}</div>
          <el-form :model="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item :label="lang ==='cn'?$store.state.title.cn.name:$store.state.title.en.name" prop="realname">
              <el-input v-model="ruleForm.realname"></el-input>
            </el-form-item>
            <el-form-item :label="lang ==='cn'?$store.state.title.cn.phone:$store.state.title.en.phone" prop="mobile">
              <el-input v-model="ruleForm.mobile"></el-input>
            </el-form-item>
            <el-form-item :label="lang ==='cn'?$store.state.title.cn.email:$store.state.title.en.email" prop="email">
              <el-input v-model="ruleForm.email"></el-input>
            </el-form-item>
            <el-form-item :label="lang ==='cn'?$store.state.title.cn.content:$store.state.title.en.content" prop="demand">
              <el-input type="textarea" v-model="ruleForm.demand"></el-input>
            </el-form-item>
            <el-row>
              <el-col :span="5" :offset="19">
                <el-button class="btn" type="primary" @click="form(ruleForm)">{{lang ==='cn'?$store.state.title.cn.submit:$store.state.title.en.submit}}</el-button>
              </el-col>
            </el-row>
          </el-form>
        </el-col>
        <el-col :span="10" class="right" :offset="1">
          <div class="top">
            <div class="title">{{lang ==='cn'?$store.state.title.cn.german_head:$store.state.title.en.german_head}}</div>

            <div class="mail">
              <el-row class="matop_30">
                <el-col :span="1" class="img">
                  <img src="@/assets/contact/add.png" alt width="15px" />
                </el-col>
                <el-col :span="22" class="txt">Erlangen Germany</el-col>
              </el-row>
              <el-row class="matop_30">
                <el-col :span="1" class="img">
                  <img src="@/assets/contact/mail.png" alt width="15px" />
                </el-col>
                <el-col :span="22" class="txt">Sales email:sales@istonemc.com</el-col>
              </el-row>

              <el-row class="matop_30">
                <el-col :span="1" class="img">
                  <img src="@/assets/contact/mail.png" alt width="15px" />
                </el-col>
                <el-col :span="22" class="txt">Technical support email:Technicalsupport@istonemc.com</el-col>
              </el-row>
            </div>
          </div>
          <div class="top btm">
            <div class="title">{{lang ==='cn'?$store.state.title.cn.cn_head:$store.state.title.en.cn_head}}</div>

            <div class="mail">
              <el-row class="matop_30">
                <el-col :span="1" class="img">
                  <img src="@/assets/contact/add.png" alt width="15px" />
                </el-col>
                <el-col :span="22" class="txt">上海市徐汇区桂平路418号A幢0108室</el-col>
              </el-row>
              <el-row class="matop_30">
                <el-col :span="1" class="img">
                  <img src="@/assets/contact/mail.png" alt width="15px" />
                </el-col>
                <el-col :span="22" class="txt">销售邮箱:sales@istonemc.com</el-col>
              </el-row>

              <el-row class="matop_30">
                <el-col :span="1" class="img">
                  <img src="@/assets/contact/mail.png" alt width="15px" />
                </el-col>
                <el-col :span="22" class="txt">技术支持邮箱:Technicalsupport@istonemc.com</el-col>
              </el-row>
              <el-row class="matop_30">
                <el-col :span="1" class="img">
                  <img src="@/assets/contact/phone.png" alt width="15px" />
                </el-col>
                <el-col :span="22" class="txt">TEL：021-64030375</el-col>
              </el-row>
            </div>
          </div>
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
      ruleForm: {},
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
    form(form) {
      let para = {
        form,
      };
      this.axiosPost("index/MessageAdd", para.form, data => {
        console.log(data);
      });
    },
    headerImg(){
      this.axiosGets('index/contact',{},data => {
        console.log(data)
        this.$store.commit('update_contact',data.data.data.headImage[0].image_info.image_url)
      })
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.lang = localStorage.getItem("language");
    this.headerImg()
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

<style lang='less'>
@typeColor: #c90007;

#contactinfo {
  .breadcrumb {
    margin-top: 82px;

    .is-link {
      color: @typeColor;
    }
  }
  .content {
    margin-top: 100px;
    font-size: 16px;
    .left {
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 0px 11px 1px rgba(19, 19, 19, 0.07);
      padding-right: 20px;
      .el-textarea {
        textarea {
          height: 180px;
        }
      }
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
      //   height: 35px;
      // width: 80px;
      //   line-height: 11px;
    }
    .btn {
      margin-bottom: 20px;
    }
    .title {
      font-size: 20px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(85, 85, 85, 1);
      margin: 20px;
    }
    .right {
      font-size: 14px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(85, 85, 85, 1);
      .title {
        // height: 28px;
        // width: 83px;
        display: inline;
        padding: 5px 10px;
        background: rgba(205, 0, 7, 1);
        font-size: 14px;
        font-family: Microsoft YaHei;
        line-height: 28px;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        text-align: center;
      }
      .img {
        margin-right: 10px;
      }
      .txt {
        line-height: 18px;
      }
      .matop_30 {
        margin-top: 30px;
      }
      .btm {
        margin-top: 90px;
      }
    }
  }
}
</style>