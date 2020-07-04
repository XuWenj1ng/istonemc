<template>
  <div id="revamp">
    <el-row class="layout_margin ismc_btn">
      <el-row class="breadcrumb">
        <el-col>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>搜索结果:{{name}}</el-breadcrumb-item>
          </el-breadcrumb>
        </el-col>
      </el-row>
      <el-row class="application_table">
        <el-row class="title" v-html="brightenKeyword(producttype[0].type_name,name)" v-show="producttype[0].type_name"></el-row>
        <el-table :data="fileInfo" border style="width: 100%">
          <el-table-column prop="image_name" :label="lang === 'cn'?'文件名':'The file name'" width="700">
          <!-- <el-table-column prop="address" label></el-table-column> -->
          <template slot-scope="scope">
            <el-col v-html="brightenKeyword(scope.row.image_name,name)">
            </el-col>
          </template>
          </el-table-column>
          <el-table-column align="right">
            <template slot-scope="scope">
              <!-- <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)"
              >Delete</el-button>-->
              <el-row class="downBtn" @click.native="handleEdit(scope.$index, scope.row)">
                <el-col :span="4" :offset="2">
                  <img src="@/assets/goodsinfo/download.png" alt width="25px" />
                </el-col>
                <el-col :span="14" class="btnTxt">{{lang =='cn'?'点击下载':'Download'}}</el-col>
              </el-row>
            </template>
          </el-table-column>
        </el-table>
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
      btn_index: 1,
      ruleForm: [],
      id: undefined,
      checked: undefined,
      fileInfo: [],
      name: "",
      txt: "",
      lang:'',
      producttype: {}
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
    handleEdit(index,row){
      // console.log(index,row)
      this.downloadFile(row)
    },

    // 下载
    downloadFile (data) {
            let admin_id = JSON.parse(localStorage.getItem("member_info")).admin_id;

            // let para = {
            //     product_id: data.image_id,
            //     file_name: data.image_name,
            //     file_url: data.image_url,
            //     member_id:admin_id
            // }
            // this.axiosPost('index/downloadFile', para, data => {
            //     console.log(data)
            // }
            window.open(this.BaseURL+"index/downloadFile?product_id="+data.image_id+"&file_name="+data.image_name+"&file_url="+data.image_url+"&member_id="+admin_id)
        },
    brightenKeyword(val, keyword) {
      val = val + "";
      if (val.indexOf(keyword) !== -1 && keyword !== "") {
        return val.replace(
          keyword,
          '<font color="#c90007">' + keyword + "</font>"
        );
      } else {
        return val;
      }
    },
    searchInfo() {
      let para = {
        keywords: this.name
      };
      this.axiosPost("index/searchAll", para, data => {
        console.log(data);
        this.producttype = data.data.data.producttype;
        this.fileInfo = data.data.data.file;
      });
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    // this.id = this.$Request.id;
    this.txt = this.brightenKeyword("上山打老虎", this.id);
    this.name = this.$route.params.name;
    this.lang =localStorage.getItem('language')
    this.searchInfo();
    // console.log(this.$route.params.name)
    // console.log(this.brightenKeyword('上山打老虎','上山'))
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
  .breadcrumb {
    margin-bottom: 65px;

    .is-link {
      color: @typeColor;
    }
  }
  .application_table {
    .title {
      font-size: 16px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(0, 0, 0, 1);
      margin-bottom: 30px;
    }
    .cell {
      text-align: center;
    }

    .downBtn {
      img {
        margin-top: 5px;
      }

      .btnTxt {
        line-height: 38px;
      }
    }
  }
}
</style>