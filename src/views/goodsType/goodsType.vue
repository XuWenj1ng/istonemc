<template>
  <div id="goodsType">
    <div class="block" id="img">
      <img :src="$store.state.product_banner" alt class="bannerImg" width="100%" align="absbottom" />
    </div>
    <el-row class="layout_margin breadcrumb">
      <el-row>
        <el-col>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item
              :to="{ path: '/' }"
            >{{lang ==='cn'?$store.state.title.cn.index:$store.state.title.en.index}}</el-breadcrumb-item>
            <el-breadcrumb-item
              :to="{ path: '/product' }"
            >{{lang ==='cn'?$store.state.title.cn.pro:$store.state.title.en.pro}}</el-breadcrumb-item>
            <el-breadcrumb-item>{{productTypeDetail.type_name}}</el-breadcrumb-item>
            <!-- <el-breadcrumb-item>{{goodsinfo}}</el-breadcrumb-item> -->
          </el-breadcrumb>
        </el-col>
      </el-row>
      <keep-alive>
        <router-view />
      </keep-alive>
      <el-row class="product_content">
        <el-col :span="7">
          <h3>{{productTypeDetail.type_name}}</h3>
        </el-col>
        <!-- <el-col :span="4">
          <div class="price">
            <span class="txt1">价格：</span>
            <span class="txt2">¥{{productDetail.price}}</span>
          </div>
        </el-col>
        <el-col :span="8" :offset="5">
          <div class="shopcar">加入购物车</div>
        </el-col>-->
      </el-row>
      <el-row>
        <el-row type="flex" class="type" justify="space-between">
          <el-col :span="6">
            <div
              :class="index===0?'grid-content bg-purple-light':'grid-content'"
              @click="typeIndex(0)"
            >{{lang ==='cn'?$store.state.title.cn.introduction:$store.state.title.en.introduction}}</div>
          </el-col>
          <el-col :span="6">
            <div
              :class="index===1?'grid-content bg-purple-light':'grid-content'"
              @click="typeIndex(1)"
            >{{lang ==='cn'?$store.state.title.cn.specification:$store.state.title.en.specification}}</div>
          </el-col>
          <el-col :span="6">
            <div
              :class="index===2?'grid-content bg-purple-light':'grid-content'"
              @click="typeIndex(2)"
            >{{lang ==='cn'?$store.state.title.cn.test:$store.state.title.en.test}}</div>
          </el-col>
        </el-row>
      </el-row>
      <el-row>
        <el-row class="typeInfo">
          <el-col class="left" :span="8">
            <img :src="productTypeDetail.image_info.image_url" alt width="100%" class="typeImg" />
          </el-col>
          <el-col class="right" :span="15" :offset="1">
            <div class="infoTxt" v-show="index===0" v-html="productTypeDetail.content"></div>
            <div class="infoTxt" v-show="index===1" v-html="productTypeDetail.description"></div>
            <div class="infoTxt" v-show="index===2" v-html="productTypeDetail.standard"></div>
          </el-col>
        </el-row>
      </el-row>
      <!-- <el-row>
        <el-col :span="6" class="wordBtn">相关文档</el-col>
      </el-row>-->
      <el-row class="application_table">
        <!-- <el-table :data="productDetail.fileInfo" border style="width: 100%">
          <el-table-column prop="image_name" label="文件名" width="700"></el-table-column>
          <el-table-column prop="address" label></el-table-column>
          <el-table-column align="right">
            <template slot-scope="scope">
              <el-row class="downBtn" @click="handleEdit(scope.$index, scope.row)">
                <el-col :span="4" :offset="2">
                  <img src="@/assets/goodsinfo/download.png" alt width="25px" />
                </el-col>
                <el-col :span="14" class="btnTxt">点击下载</el-col>
              </el-row>
            </template>
          </el-table-column>
        </el-table>-->
        <el-table :data="productList" style="width: 100%" class="table">
          <el-table-column
            prop="title"
            :label="lang ==='cn'?$store.state.title.cn.model:$store.state.title.en.model"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="price"
            :label="lang ==='cn'?$store.state.title.cn.price:$store.state.title.en.price"
            width="180"
          >
            <template slot-scope="scope">¥{{scope.row.price}}</template>
          </el-table-column>
          <el-table-column align="right">
            <template slot-scope="scope">
              <el-row>
                <el-col :span="10" :offset="2">
                  <el-button
                    @click="goInfo(scope.row)"
                    class="btn"
                    type="primary"
                  >{{lang ==='cn'?$store.state.title.cn.details:$store.state.title.en.details}}</el-button>
                </el-col>
                <el-col :span="10">
                  <el-button @click="joinCart(scope.row)" class="btn">{{lang ==='cn'?$store.state.title.cn.joincart:$store.state.title.en.joincart}}</el-button>
                </el-col>
              </el-row>
            </template>
          </el-table-column>
        </el-table>
      </el-row>
      <el-row class="title">
        <el-col>
          <h4>{{lang ==='cn'?$store.state.title.app:$store.state.title.en.app}}</h4>
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
      </el-row>-->
    </el-row>
  </div>
</template>

<script src='./goodsType.js'>
</script>

<style lang='less'>
@import "./goodsType.less";
</style>
