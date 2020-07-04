<template>
  <div id="product">
    <div class="block" id="img">
      <img :src="$store.state.product_banner" alt class="bannerImg" width="100%" align="absbottom" />
    </div>
    <el-row class="layout_margin breadcrumb">
      <el-row>
        <el-col>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">{{lang ==='cn'?$store.state.title.cn.index:$store.state.title.en.index}}</el-breadcrumb-item>
            <el-breadcrumb-item>{{lang ==='cn'?$store.state.title.cn.pro:$store.state.title.en.pro}}</el-breadcrumb-item>
          </el-breadcrumb>
        </el-col>
      </el-row>
      <el-row class="product_content" v-for="item in productTypeList" :key="item.id">
        <div class="product_content_left">
          <img :src="item.image_info.image_url" alt  align="absbottom" width="100%"/>
        </div>
        <div class="product_content_right">
            <div class="title">{{item.type_name}}</div>
            <div class="info" v-html="item.content"></div>
            <div class="btn" @click="goInfo(item)">{{lang ==='cn'?$store.state.title.cn.details:$store.state.title.en.details}}</div>
        </div>
      </el-row>
      <el-row>
          <el-col>
              <img :src="app_url" alt="" width="100%" align="absbottom" @click="go"/>
          </el-col>
      </el-row>
    </el-row>
  </div>
</template>

<script src="./product.js"></script>

<style lang='less'>
@import "./product.less";
</style>