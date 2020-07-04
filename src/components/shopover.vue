<template>
  <div id="shopover" class="layout_margin">
    <el-row>
      <h2>订单已经提交！</h2>
    </el-row>
    <el-row class="txt">
      <span>您的订单已经提交，我们将尽快和您联系并确认您的订单信息及商品配送信息。</span>
    </el-row>
    <el-row>
      <el-col :span="3" class="btn" @click.native="gohome">返回首页</el-col>
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
      formLabelAlign: {}
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
      gohome() {
          this.$router.push({path:"/index"})
      }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
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

#shopover {
  font-size: 16px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: rgba(85, 85, 85, 1);
  h2 {
    font-size: 22px;
    margin-top: 70px;
  }
  span {
    font-size: 14px;
  }
  .txt {
    margin-top: 20px;
  }
  .btn {
    height: 38px;
    background: rgba(205, 0, 7, 1);
    line-height: 38px;
    text-align: center;
    color: #fff;
    margin-top: 50px;
  }
}
</style>