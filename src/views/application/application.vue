<template>
  <div id="application">
    <div class="block" id="img">
      <img
        :src="applicationStudio[0].img_detail.image_url"
        alt
        class="bannerImg"
        width="100%"
        align="absbottom"
      />
    </div>
    <el-row class="layout_margin breadcrumb">
      <el-row>
        <el-col>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">{{lang == 'cn'?$store.state.title.cn.index:$store.state.title.en.index}}</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/product' }">{{lang == 'cn'?$store.state.title.cn.pro:$store.state.title.en.pro}}</el-breadcrumb-item>
            <el-breadcrumb-item>Application Studio</el-breadcrumb-item>
          </el-breadcrumb>
        </el-col>
      </el-row>
      <el-row class="product_content">
        <el-col>
          <h3>{{applicationStudio[0].name}}</h3>
        </el-col>
        <el-col class="content" v-html="content">
            <!-- {{content}} -->
        </el-col>
      </el-row>
      <el-row class="application_table">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="image_name" label="文件名" width="700"></el-table-column>
          <!-- <el-table-column prop="address" label></el-table-column> -->
          <el-table-column align="right">
            <template slot-scope="scope">
              <!-- <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)"
              >Delete</el-button> -->
              <el-row class="downBtn" @click.native="handleEdit(scope.$index, scope.row)">
                <el-col :span="4" :offset="2">
                  <img src="@/assets/goodsinfo/download.png" alt width="25px" />
                </el-col>
                <el-col :span="14" class="btnTxt">点击下载</el-col>
              </el-row>
            </template>
          </el-table-column>
        </el-table>
      </el-row>
    </el-row>
  </div>
</template>

<script src="./application.js">
</script>

<style lang='less'>
@import "./application.less";
</style>