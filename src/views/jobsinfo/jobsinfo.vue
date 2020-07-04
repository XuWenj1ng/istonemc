<template>
  <div id="jobsInfo">
    <div class="block" id="img">
      <!-- <span class="demonstration">Click 指示器触发</span> -->
      <!-- <el-carousel trigger="click" :autoplay="true"> -->
      <!-- <el-carousel-item v-for="item in 4" :key="item"> -->
      <!-- <h3 class="small">{{ item }}</h3> -->
      <img :src="$store.state.company_banner" alt class="bannerImg" width="100%" />
      <!-- </el-carousel-item> -->
      <!-- </el-carousel> -->
    </div>
    <el-row class="content layout_margin">
      <el-row class="title">
        <span class="txt">职位描述</span>
      </el-row>
      <el-row class="info">
        <el-col class="left" :span="10">
          <div class="top">
            <div class="top_title">
              <span>主要职责：</span>
            </div>
            <div class="top_content">
              <div class="content_info" v-html="joinDetail.duty"></div>
            </div>
          </div>
          <div class="btm">
            <div class="top_title">
              <span>岗位基本要求：</span>
            </div>
            <div class="top_content">
              <div class="content_info" v-html="joinDetail.skill"></div>
            </div>
          </div>
        </el-col>
        <el-col class="right" :span="10" :offset="2">
          <div class="right_title">公司福利:</div>
          <div class="right_info" v-html="joinDetail.welfare">
          </div>
        </el-col>
      </el-row>
    </el-row>
  </div>
</template>

<script src='./jobsinfo.js'>
</script>

<style lang='less'>
@import "./jobsinfo.less";
</style>