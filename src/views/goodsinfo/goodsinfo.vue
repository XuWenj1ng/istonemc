<template>
  <div id="goodsInfo">
    <div class="block" id="img">
      <img :src="$store.state.product_banner" alt class="bannerImg" width="100%" align="absbottom" />
    </div>
    <el-row class="layout_margin breadcrumb">
      <!-- <el-row>
        <el-col>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/product' }">产品中心</el-breadcrumb-item>
            <el-breadcrumb-item
              :to="{ path: '/product/goodsinfo?goodsinfo='+goodsinfo}"
            >{{goodsinfo}}系列</el-breadcrumb-item>
            <el-breadcrumb-item>{{goodsinfo}}</el-breadcrumb-item>
          </el-breadcrumb>
        </el-col>
      </el-row>-->
      <keep-alive>
        <router-view />
      </keep-alive>
      <el-row class="product_content">
        <el-col :span="7">
          <h3>{{productDetail.title}}</h3>
        </el-col>
        <el-col :span="4">
          <div class="price">
            <span class="txt1">{{lang =='cn'?'价格':'Price'}}：</span>
            <span class="txt2">¥{{productDetail.price}}</span>
          </div>
        </el-col>
        <el-col :span="8" :offset="5">
          <div class="shopcar" @click="joinCart(productDetail)">{{lang==='cn'?$store.state.title.cn.joincart:$store.state.title.en.joincart}}</div>
        </el-col>
      </el-row>
      <el-row>
        <el-row type="flex" class="type" justify="space-between">
          <el-col :span="6">
            <div
              :class="index===0?'grid-content bg-purple-light':'grid-content'"
              @click="typeIndex(0)"
            >{{lang =='cn'?$store.state.title.cn.introduction:$store.state.title.en.introduction}}</div>
          </el-col>
          <el-col :span="6">
            <div
              :class="index===1?'grid-content bg-purple-light':'grid-content'"
              @click="typeIndex(1)"
            >{{lang =='cn'?$store.state.title.cn.specification:$store.state.title.en.specification}}</div>
          </el-col>
          <el-col :span="6">
            <div
              :class="index===2?'grid-content bg-purple-light':'grid-content'"
              @click="typeIndex(2)"
            >{{lang =='cn'?$store.state.title.cn.test:$store.state.title.en.test}}</div>
          </el-col>
        </el-row>
      </el-row>
      <el-row>
        <el-row class="typeInfo">
          <el-col class="left" :span="8">
            <img :src="productDetail.img_info.image_url" alt width="100%" class="typeImg" />
          </el-col>
          <el-col class="right" :span="15" :offset="1">
            <div class="infoTxt" v-show="index===0" v-html="productDetail.pro_intorduct"></div>
            <div class="infoTxt" v-show="index===1" v-html="productDetail.pro_description"></div>
            <div class="infoTxt" v-show="index===2" v-html="productDetail.pro_standard"></div>
          </el-col>
        </el-row>
      </el-row>
      <el-row>
        <el-col :span="6" class="wordBtn">{{lang == 'cn'?'相关文档':'The related documents'}}</el-col>
      </el-row>
      <el-row class="application_table">
        <el-table :data="productDetail.fileInfo" border style="width: 100%">
          <el-table-column prop="image_name" :label="lang === 'cn'?'文件名':'The file name'" width="700"></el-table-column>
          <!-- <el-table-column prop="address" label></el-table-column> -->
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
                <el-col :span="14" class="btnTxt" >{{lang =='cn'?'点击下载':'Download'}}</el-col>
              </el-row>
            </template>
          </el-table-column>
        </el-table>
      </el-row>
      <el-row class="title">
        <el-col>
          <h4>{{lang =='cn'?$store.state.title.cn.app:$store.state.title.en.app}}</h4>
        </el-col>
      </el-row>
      <el-row class="news">
        <el-row type="flex" class="row-bg" justify="space-between">
          <el-col :span="5">
            <div class="grid-content bg-purple">
              <div class="top">
                <img src="@/assets/goodsinfo/news.png" alt width="100%" />
                <div class="img_txt">电子行业</div>
              </div>
            </div>
          </el-col>
          <el-col :span="5">
            <div class="grid-content bg-purple-light">
              <div class="top">
                <img src="@/assets/goodsinfo/news1.png" alt width="100%" />
                <div class="img_txt">医疗行业</div>
              </div>
            </div>
          </el-col>
          <el-col :span="5">
            <div class="grid-content bg-purple">
              <div class="top">
                <img src="@/assets/goodsinfo/news2.png" alt width="100%" />
                <div class="img_txt">光伏行业</div>
              </div>
            </div>
          </el-col>
          <el-col :span="5">
            <div class="grid-content bg-purple">
              <div class="top">
                <img src="@/assets/goodsinfo/news3.png" alt width="100%" />
                <div class="img_txt">机器人行业</div>
              </div>
            </div>
          </el-col>
        </el-row>
      </el-row>
      <!-- <el-row class="title">
        <el-col>
          <h4>相关问题</h4>
        </el-col>
      </el-row>
      <el-row class="problem">
        <ul>
          <li>111?</li>
        </ul>
      </el-row> -->
    </el-row>
  </div>
</template>

<script src='./goodsinfo.js'>
</script>

<style lang='less'>
@import "./goodsinfo.less";
</style>
