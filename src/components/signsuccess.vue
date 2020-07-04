<template>
  <div id="signsuccess" class="layout_margin">
    <el-row>
      <div class="title">注册完成！感谢您注册Stone Motion Control会员，成为会员，您可以获得如下权益：</div>
      <el-row class="true">
        <el-col :span="1">
          <img src="@/assets/banner/true.png" alt width="25px" />
        </el-col>
        <el-col :span="10" class="ml">更专业会员售前售后支撑服务</el-col>
      </el-row>
      <el-row class="true ma_top">
        <el-col :span="1">
          <img src="@/assets/banner/true.png" alt width="25px" />
        </el-col>
        <el-col :span="10" class="ml">查看产品更多相关文档</el-col>
      </el-row>
      <el-row class="true ma_top">
        <el-col :span="1">
          <img src="@/assets/banner/true.png" alt width="25px" />
        </el-col>
        <el-col :span="10" class="ml">论坛咨询及提问获得更快更专业的回答</el-col>
      </el-row>
    </el-row>
    <el-row class="ma_top_40">
      <el-col :span="6" :offset="10">
        <el-button type="primary" @click.native="gohome()">返回首页</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    //这里存放数据
    return {};
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
      // console.log(1);
      this.$router.push({path: "/index"});
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    // console.log(1)
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

#signsuccess {
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
  .ma_top_40 {
    margin-top: 40px;
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
</style>