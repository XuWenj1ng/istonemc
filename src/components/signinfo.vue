<template>
  <div id="signinfo" class="layout_margin">
    <el-row>
      <div class="title" v-if="lang == 'cn'">感谢您注册Stone Motion Control会员，成为会员，您可以获得如下权益：</div>
      <div class="title" v-else>Thank you for registering as a member of stone motion control. As a member, you can get the following benefits: </div>
      <el-row class="true">
        <el-col :span="1">
          <img src="@/assets/banner/true.png" alt width="25px" />
        </el-col>
        <el-col :span="10" class="ml" v-if="lang ==='cn'">更专业会员售前售后支撑服务</el-col>
        <el-col :span="15" class="ml" v-else>More professional members pre-sale and after-sales support service </el-col>
      </el-row>
      <el-row class="true ma_top">
        <el-col :span="1">
          <img src="@/assets/banner/true.png" alt width="25px" />
        </el-col>
        <el-col :span="10" class="ml" v-if="lang ==='cn'">查看产品更多相关文档</el-col>
        <el-col :span="10" class="ml" v-else>View more product related documents</el-col>
      </el-row>
      <el-row class="true ma_top">
        <el-col :span="1">
          <img src="@/assets/banner/true.png" alt width="25px" />
        </el-col>
        <el-col :span="10" class="ml" v-if="lang==='cn'">论坛咨询及提问获得更快更专业的回答</el-col>
        <el-col :span="15" class="ml" v-else>Forum consultation and questions for faster and more professional answers</el-col>
      </el-row>
    </el-row>
    <el-row class="sign_info">
      <el-row class="sign_title" v-if="lang ==='cn'">登陆信息</el-row>
      <el-row class="sign_title" v-else> Landing information</el-row>
      <el-form
        :model="ruleForm"
        status-icon
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
        label-position="left"
      >
        <el-form-item :label="lang === 'cn'? '用户名:':' user name:'" prop="username">
          <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item :label="lang==='cn'? '电子邮箱:':'mail box:'" prop="email">
          <el-input v-model="ruleForm.email"></el-input>
        </el-form-item>
        <el-form-item :label="lang === 'cn'?'密码':'password'" prop="password">
          <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item :label="lang ==='cn'?'确认密码':'Confirm password:'" prop="password1">
          <el-input type="password" v-model="ruleForm.password1" autocomplete="off"></el-input>
        </el-form-item>
        <el-row class="sign_title" v-if="lang ==='cn'">账号信息</el-row>
        <el-row class="sign_title" v-else> Account information</el-row>
        <el-form-item label="账号类型:" prop="type" v-if="lang ==='cn'">
          <el-select v-model="ruleForm.type" placeholder="请选择类型" width="100%">
            <el-option label="个人" value="0"></el-option>
            <el-option label="企业" value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Account type:" prop="type" v-else>
          <el-select v-model="ruleForm.type" placeholder="Please select type" width="100%">
            <el-option label="个人" value="0"></el-option>
            <el-option label="企业" value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="姓名/公司:" prop="name" v-if="lang === 'cn'">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
         <el-form-item label="Name/company:" prop="name" v-else>
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="昵称:" prop="nickname" v-if="lang ==='cn'">
          <el-input v-model="ruleForm.nickname"></el-input>
        </el-form-item>
        <el-form-item label="Nickname" prop="nickname" v-else>
          <el-input v-model="ruleForm.nickname"></el-input>
        </el-form-item>
        <el-form-item label="手机:" prop="telephone" v-if="lang ==='cn'">
          <el-input v-model="ruleForm.telephone"></el-input>
        </el-form-item>
        <el-form-item label="mobile phone:" prop="telephone" v-else>
          <el-input v-model="ruleForm.telephone"></el-input>
        </el-form-item>
        <el-form-item label="联系地址:" prop="country" v-if="lang==='cn'">
          <el-select v-model="ruleForm.country" placeholder="请选择国家" width="100%">
            <el-option
              :label="item.country"
              :value="item.country"
              v-for="item in countryList"
              :key="item.no"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Contact address:" prop="country" v-else-if="lang==='en'">
          <el-select v-model="ruleForm.country" placeholder="Please select country" width="100%">
            <el-option
              :label="item.country"
              :value="item.country"
              v-for="item in countryList"
              :key="item.no"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="地址1:" prop="address1" v-if="lang==='cn'">
          <el-input v-model="ruleForm.address1"></el-input>
        </el-form-item>
        <el-form-item label="Address1" prop="address1" v-else>
          <el-input v-model="ruleForm.address1"></el-input>
        </el-form-item>
        <el-form-item label="地址2:" prop="address2" v-if="lang === 'cn'">
          <el-input v-model="ruleForm.address2"></el-input>
        </el-form-item>
        <el-form-item label="Address2" prop="address2" v-else>
          <el-input v-model="ruleForm.address2"></el-input>
        </el-form-item>
        <el-form-item label="邮政编码:" prop="post_code" v-if="lang==='cn'">
          <el-input v-model="ruleForm.post_code"></el-input>
        </el-form-item>
        <el-form-item label="Postal Code:" prop="post_code" v-else>
          <el-input v-model="ruleForm.post_code"></el-input>
        </el-form-item>
        <el-form-item class="btm">
          <el-checkbox v-model="checked" class="checked" v-if="lang==='cn'">我已阅读隐私条约</el-checkbox>
          <el-checkbox v-model="checked" class="checked" v-else> I have read the privacy treaty</el-checkbox>
          <el-row>
            <el-col :span="6" :offset="9">
              <el-button type="primary" @click="submitForm(ruleForm)" v-if="lang==='cn'">注册</el-button>
              <el-button type="primary" @click="submitForm(ruleForm)" v-else>Register</el-button>
            </el-col>
          </el-row>
          <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
        </el-form-item>
      </el-form>
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
      checked: false,
      countryList: [],
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
    submitForm(data) {
      if (this.checked) {
        this.postForm(data);
      } else {
        this.$message({
          showClose: true,
          message: "请先阅读条款！",
          type: "error"
        });
      }
    },
    postForm(data) {
      let para = {
        data
      };
      
      this.axiosPost("index/memberadd", para.data, data => {
        console.log(data);
        if (data.data.code === 1) {
          this.$message({
            message: data.data.msg,
            type: "success"
          });

          //  注册成功之后 自动登录
          this.login(para.data);
          //   跳
          this.$router.push("/sign/success");
        }
      });
    },
    // 登录请求
    login(data) {
      let para = {
        username: data.username,
        password: data.password
      };
      this.axiosPost("index/login", para, data => {
        // console.log(data);
        if(data.data.code === 1){
          this.$message({
            message: data.data.msg,
            type: "success"
          });
          localStorage.setItem("token",data.data.data.token)
          localStorage.setItem("member_info",JSON.stringify(data.data.data.member_info))
          let name = JSON.parse(localStorage.getItem("member_info")).username;
          this.$store.commit('update_username',name)
          // console.log(JSON.parse(localStorage.getItem("member_info")).admin_id)
        }else{
          this.$message({
            message: data.data.msg,
            type: "error"
          });
        }
      });
    },
    goCountry() {
      let para = {};
      this.axiosGets("index/countryList", para, data => {
        console.log(data);
        this.countryList = data.data.data.countryList;
      });
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.lang=localStorage.getItem('language')
    this.goCountry();
    this.login()
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

#signinfo {
  font-size: 16px;
  margin-top: 70px;
  .title {
    font-size: 16px;
    font-family: Microsoft YaHei;
    font-weight: bold;
    color: rgba(85, 85, 85, 1);
  }
  .true {
    margin-top: 35px;
    font-size: 14px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(85, 85, 85, 1);
    line-height: 25px;
  }
  .ml {
    margin-left: 10px;
  }
  .ma_top {
    margin-top: 20px;
  }
  .sign_info {
    .sign_title {
      height: 60px;
      text-align: center;
      font-size: 16px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(85, 85, 85, 1);
      line-height: 60px;
      background: rgba(153, 153, 153, 0.3);
      margin-top: 65px;
      margin-bottom: 25px;
    }
    .el-checkbox__input.is-checked .el-checkbox__inner {
      background-color: @typeColor;
      border-color: @typeColor;
    }
    .el-checkbox__input.is-focus .el-checkbox__inner {
      border-color: @typeColor;
    }
    .el-checkbox__inner:hover {
      border-color: @typeColor;
    }
    .el-checkbox__input.is-checked + .el-checkbox__label {
      color: @typeColor;
    }
    .btm {
      height: 180px;
      background: rgba(153, 153, 153, 0.3);
      .checked {
        margin-top: 25px;
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
  .demo-ruleForm {
    .el-select {
      width: 100%;
    }
  }
}
</style>