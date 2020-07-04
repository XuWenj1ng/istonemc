<template>
  <div id="shopcartInfo" class="layout_margin">
    <el-row>
      <el-row class="breadcrumb">
        <el-col>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">{{lang === 'cn'?$store.state.title.cn.index:$store.state.title.en}}</el-breadcrumb-item>
            <el-breadcrumb-item>{{lang == 'cn'?'购物车':'Shopping Cart'}}</el-breadcrumb-item>
          </el-breadcrumb>
        </el-col>
      </el-row>
      <el-row class="shop_list">
        <el-col
          class="shop_list_info"
          :span="22"
          :offset="1"
          v-for="item in cartList.data"
          :key="item.id"
        >
          <el-row>
            <el-col class="left" :span="9">
              <img :src="item.image_info.image_url" alt width="100%" />
            </el-col>
            <el-col class="right" :span="12" :offset="1">
              <el-row>
                <div class="title">{{item.type_name}}</div>
              </el-row>
              <el-row>
                <div class="price">
                  <span class="txt">单价：</span>
                  <span class="num">¥{{item.price}}</span>
                </div>
              </el-row>
              <el-row>
                <div class="number">
                  <span class="txt">数量：</span>
                  <!-- <input
                    type="num"
                    v-model="item.count"
                    class="numberInput"
                    style="direction: rtl;"
                  /> -->
                  <span class="num">{{item.count}}</span>
                </div>
              </el-row>
              <el-divider></el-divider>
              <el-row class="right_btm">
                <el-col class="sum" :span="3" :offset="18">
                  <div class="txt">小计：</div>
                </el-col>
                <el-col class :span="3">
                  <div class="num">¥{{item.subprice}}</div>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      <el-divider></el-divider>
      <el-row class="total">
        <el-col :span="4" :offset="20">
          <div class="top">
            <span>总数量：</span>
            <span class="num">{{cartList.count}}</span>
          </div>
          <div class="btm">
            <span>总计：</span>
            <span class="num">¥{{cartList.total_count}}</span>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24" class="info_title">联系信息</el-col>
      </el-row>
      <el-row>
        <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
          <el-form-item label="姓名/公司:">
            <el-input v-model="formLabelAlign.name"></el-input>
          </el-form-item>
          <el-form-item label="手机：">
            <el-input v-model="formLabelAlign.telephone"></el-input>
          </el-form-item>
          <el-form-item label="联系地址:">
            <el-input v-model="formLabelAlign.country"></el-input>
          </el-form-item>
          <el-form-item label="地址1:">
            <el-input v-model="formLabelAlign.address1"></el-input>
          </el-form-item>
          <el-form-item label="地址2:">
            <el-input v-model="formLabelAlign.address2"></el-input>
          </el-form-item>
          <el-form-item label="邮政编码:">
            <el-input v-model="formLabelAlign.post_code"></el-input>
          </el-form-item>
        </el-form>
      </el-row>
      <el-row class="shop_btn">
        <el-col class="btn1 btn" :span="3" :offset="17" @click.native="goCart()">返回购物车</el-col>
        <el-col class="btn2 btn" :span="3" :offset="1" @click.native="trueCart(formLabelAlign)">确认</el-col>
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
      num: 1,
      labelPosition: "left",
      formLabelAlign: {},
      cartList: [],
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
      let para = {
        id: this.id
      };
      this.axiosGets("index/cartList", para, data => {
        console.log(data);
        this.cartList = data.data.data.cartList;
      });
    },
    trueCart(form) {
      let admin_id = JSON.parse(localStorage.getItem("member_info")).admin_id;

      let para = {
        form: {
          cart: this.cartList.data,
          address1: form.address1,
          address2: form.address2,
          country: form.country,
          name: form.name,
          post_code: form.post_code,
          telephone: form.telephone,
          member_id: admin_id
        }
      };
      console.log(para.form);
      this.axiosPost("index/orderadd", para.form, data => {
        console.log(data);
        if (data.data.code === 1) {
          this.$message({
            showClose: true,
            message: data.data.msg,
            type: "success"
          });
          this.$router.push("/shoppingcar/over");
        }else {
          this.$message({
            showClose: true,
            message: data.data.msg,
            type: "error"
          });
        }
      });
    },
    goCart(){
      this.$router.push({path:'shoppingcar',query:{id:this.id}})
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.id = this.$route.query.id;
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
@import "../assets/common.less";

@typeColor: #c90007;

#shopcartInfo {
  .breadcrumb {
    margin-top: 82px;

    .is-link {
      color: @typeColor;
    }
  }
  .shop_list {
    margin-top: 70px;
    .shop_list_info {
      //   height: 307px;
      background: rgba(153, 153, 153, 0.04);
      margin-bottom: 40px;
      .left {
        padding: 20px;
        padding-bottom: 0;
        // box-sizing: bo;
      }
      .right {
        font-size: 18px;
        font-family: Microsoft YaHei;
        font-weight: bold;
        color: rgba(85, 85, 85, 1);
        padding: 40px 0px 0 0;
        .price {
          margin-top: 20px;
          .txt {
            font-size: 14px;
            color: #555;
          }
          .num {
            font-size: 26px;
            color: @typeColor;
          }
        }
        .number {
          margin-top: 20px;
          .txt {
            font-size: 14px;
            color: #555;
          }
          .numberInput {
            height: 30px;
            width: 85px;
            font-size: 26px;
          }
        }
        .right_btm {
          font-size: 16px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: rgba(85, 85, 85, 1);
        }
      }
    }
  }
  .total {
    font-size: 16px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(85, 85, 85, 1);
    // float: right;
    .btm {
      margin-top: 10px;
    }
  }
  .info_title {
    margin-top: 40px;
    margin-bottom: 20px;
    height: 67px;
    background: rgba(153, 153, 153, 0.04);
    // opacity: 0.04;
    font-size: 18px;
    line-height: 67px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: rgba(85, 85, 85, 1);
    text-align: center;
  }
  .shop_btn {
    margin-top: 60px;
    .btn {
      font-size: 16px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(85, 85, 85, 1);
      height: 40px;
      line-height: 40px;
      // border: 1px solid rgba(51, 51, 51, 1);
      text-align: center;
    }
    .btn1 {
      border: 1px solid rgba(51, 51, 51, 1);
    }
    .btn2 {
      background: rgba(205, 0, 7, 1);
      color: #fff;
    }
  }
}
</style>