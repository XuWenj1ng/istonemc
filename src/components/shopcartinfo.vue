<template>
  <div id="shopcartInfo" class="layout_margin">
    <el-row>
      <el-row class="breadcrumb">
        <el-col>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">{{lang == 'cn'?$store.state.title.cn.index :$store.state.title.en.index}}</el-breadcrumb-item>
            <el-breadcrumb-item>{{lang == 'cn'? '购物车':'Shopping Cart'}}</el-breadcrumb-item>
          </el-breadcrumb>
        </el-col>
      </el-row>
      <el-row class="shop_list">
        <el-row v-if="cartList.count !== 0 ">
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
                    <input
                      type="num"
                      v-model="item.count"
                      class="numberInput"
                      style="direction: rtl;"
                      @keyup="number($event)"
                    />
                  </div>
                </el-row>
                <el-divider></el-divider>
                <el-row class="right_btm">
                  <el-col class="sum" :span="3" :offset="18">
                    <div class="txt">小计：</div>
                  </el-col>
                  <el-col class :span="3">
                    <div class="num">¥{{item.price*item.count}}</div>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
          </el-col>

          <el-col>
            <el-row class="shop_btn">
              <el-col class="btn1 btn" :span="3" :offset="17" @click.native="goGoods()">再看看</el-col>
              <el-col class="btn2 btn" :span="3" :offset="1" @click.native="edit()">确认</el-col>
            </el-row>
          </el-col>
        </el-row>
        <el-row v-else class="none">暂无</el-row>
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
      cartList: {},
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
      // console.log(JSON.parse(localStorage.getItem("member_info")).admin_id)

      let admin_id = JSON.parse(localStorage.getItem("member_info")).admin_id;
      let para = {
        id: admin_id
      };
      this.axiosGets("index/cartList", para, data => {
        console.log(data);
        this.cartList = data.data.data.cartList;
      });
    },

    //  编辑购物车
    edit() {
      let admin_id = JSON.parse(localStorage.getItem("member_info")).admin_id;
      let para = {
        data: this.cartList.data
      };
      this.axiosPost("/index/cartupdate", para.data, data => {
        // console.log(data);
        if (data.data.code) {
          this.$message({
            showClose: true,
            message: "编辑成功",
            type: "success"
          });
            this.$router.push({path:'/shoppingcar/index',query:{id:admin_id}})
        } else {
          this.$message({
            showClose: true,
            message: "稍后再试一下",
            type: "error"
          });
        }
      });
    },

    //  跳转 产品中心
    goGoods() {
      this.$router.push({ path: "/product" });
    },
    // 确认 购物车
    trueCart() {
      this.$router.push({ path: "/shoppingcar/index" });
    },
    number(e) {
      console.log(e.target.value);
      let flag = new RegExp("^[1-9]([0-9])*$").test(e.target.value);
      console.log(flag);
      if (!flag) {
        this.$message({
          showClose: true,
          message: "请输入正整数",
          type: "warning"
        });
      }
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
    .none {
      font-size: 16px;
      text-align: center;
      color: #606266;
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
}
</style>