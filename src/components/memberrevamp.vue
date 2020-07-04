<template>
  <div id="revamp">
    <el-row class="layout_margin ismc_btn">
      <el-col :span="7" :offset="17">
        <el-col :span="8">
          <div
            :class=" btn_index===1?'ismc_btn_1 btn_active':'ismc_btn_1'"
            @click="companybBtn(1)"
          >我的订单</div>
        </el-col>
        <el-col :span="8">
          <div
            :class=" btn_index===2?'ismc_btn_1 btn_active':'ismc_btn_1'"
            @click="companybBtn(2)"
          >我的帖子</div>
        </el-col>
        <el-col :span="8">
          <div
            :class=" btn_index===3?'ismc_btn_1 btn_active':'ismc_btn_1'"
            @click="companybBtn(3)"
          >资料修改</div>
        </el-col>
      </el-col>
    </el-row>

    <!-- 资料修改  index 3 -->
    <el-row v-show="btn_index === 3" class="layout_margin">
      <el-row class="sign_info">
        <el-row class="sign_title">登陆信息</el-row>
        <el-form
          :model="ruleForm"
          status-icon
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
          label-position="left"
        >
          <el-form-item label="用户名:" prop="name">
            <!-- <el-input v-model="ruleForm.name"></el-input> -->
            1111
          </el-form-item>
          <el-form-item label="会员级别:" prop="label">
            <!-- <el-input v-model="ruleForm.name"></el-input> -->
            初级会员
          </el-form-item>
          <el-form-item label="电子邮箱:" prop="mail">
            <el-input v-model="ruleForm.mail"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPass">
            <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
          </el-form-item>
          <el-row>
            <el-col class="message" :span="7" :offset="3">（密码区域不填写，即为不修改密码）</el-col>
          </el-row>
          <el-row class="sign_title">账号信息</el-row>
          <el-form-item label="账号类型:" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="姓名/公司:" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="昵称:" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="手机:" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="联系地址:" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="地址1:" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="地址2:" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="邮政编码:" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item class="btm">
            <!-- <el-checkbox v-model="checked" class="checked">我已阅读隐私条约</el-checkbox> -->
            <el-row>
              <el-col :span="6" :offset="4">
                <el-button type>取消</el-button>
              </el-col>
              <el-col :span="6" :offset="4">
                <el-button type="primary" @click="submitForm('ruleForm')">确认修改</el-button>
              </el-col>
            </el-row>
            <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
          </el-form-item>
        </el-form>
      </el-row>
    </el-row>

    <!-- 我的帖子  index 2-->
    <el-row v-show="btn_index === 2" class="layout_margin">
      <el-row class="sign_info">
        <el-row class="sign_title">我发布的帖子</el-row>
        <el-row class="list">
          <!-- <ul class="list_content">
            <li>高精密如何使用会更好？</li>
            <li>高精密如何使用会更好？</li>
            <li>高精密如何使用会更好？</li>
          </ul>-->
          <el-col class="none">暂无</el-col>
        </el-row>
        <el-row class="sign_title">我回复的帖子</el-row>
        <el-row class="list">
          <!-- <ul class="list_content">
            <li>高精密如何使用会更好？</li>
            <li>高精密如何使用会更好？</li>
            <li>高精密如何使用会更好？</li>
          </ul>-->
          <el-col class="none">暂无</el-col>
        </el-row>
      </el-row>
    </el-row>

    <!-- 我的订单  index 1 -->
    <el-row v-show="btn_index ===1 " class="layout_margin">
      <el-row class="orderList" v-for=" item in list" :key="item.id" >
        <el-row type="flex" class="orderTitle" justify="space-between">
          <el-col :span="6">
            <div class="grid-content bg-purple">订单日期：{{item.create_time}}</div>
          </el-col>
          <el-col :span="7">
            <div class="grid-content bg-purple">订单编号：{{item.order_num}}</div>
          </el-col>
        </el-row>
        <el-row class="orderInfo" type="flex" justify="space-between" v-for=" child in item.order_detail" :key="child.id">
          <el-col :span="6" class="type_name">{{child.type_name}}</el-col>
          <el-col :span="2" class="num">数量：{{child.count}}</el-col>
        </el-row>
        <el-row type="flex" class="orderPrice" justify="end">
          <el-col :span="3">
            <div class="grid-content bg-purple">总计：¥{{item.total_price}}</div>
          </el-col>
        </el-row>
      </el-row>
      <el-row></el-row>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    //这里存放数据
    return {
      btn_index: 1,
      ruleForm: {},
      checked: undefined,
      list:[]
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
    companybBtn(data) {
      this.btn_index = data;
    },
    getList() {
      let admin_id = JSON.parse(localStorage.getItem("member_info")).admin_id;

      let para = {
        id: admin_id
      };
      this.axiosGets("index/myMemberInfo", para, data => {
        console.log(data);
        this.list = data.data.data.orderDetail
        this.$store.commit('update_member',data.data.data.headImage[0].image_info.image_url)
      });
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.getList();
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
@typeColor: rgba(205, 0, 7, 1);
#revamp {
  .ismc_btn {
    font-size: 16px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(85, 85, 85, 1);
    text-align: center;
    margin-top: 75px;
  }

  .btn_active {
    // height:32px;
    background: rgba(205, 0, 7, 1);
    color: rgba(255, 255, 255, 1);
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
    .message {
      font-size: 12px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(119, 119, 119, 1);
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
      //   height: 180px;
      //   background: rgba(153, 153, 153, 0.3);
      margin-top: 60px;
      .checked {
        margin-top: 25px;
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

    .list {
      font-size: 16px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(85, 85, 85, 1);
      .list_content {
        margin-left: 65px;
        li {
          margin-top: 10px;
        }
      }
      .none {
        text-align: center;
      }
    }
  }
  .orderList {
    font-size: 14px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(85, 85, 85, 1);
    margin-top: 70px;
    .orderTitle {
      margin-bottom: 30px;
    }
    .orderInfo {
      background: rgba(153, 153, 153, 0.1);
      padding: 15px 40px 15px 22px;
      box-sizing: border-box;
    }
    .orderPrice {
      margin-top: 20px;
    }
  }
}
</style>