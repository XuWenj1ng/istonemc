<template>
  <div id="banner">
    <div class="block" id="img">
      <!-- <span class="demonstration">Click 指示器触发</span> -->
      <el-carousel trigger="click" :autoplay="true">
        <el-carousel-item v-for="item in bannerList" :key="item.banner_id">
          <!-- <h3 class="small">{{ item }}</h3> -->
          <img :src="item.image_info.image_url" alt class="bannerImg" width="100%" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <el-row class="content" v-show="recommendList">
      <el-row type="flex" justify="space-between">
        <el-col :span="7" v-for="item in recommendList" :key="item.id">
          <div class="grid-content bg-purple">
            <div class="label">
              <img :src="item.image_info.image_url" alt width="100%" />
              <div class="txt">
                <div class="top">{{item.title}}</div>
                <!-- <div class="btm"></div> -->
                <img src="@/assets/banner/true.png" alt width="28px" />
              </div>
            </div>
          </div>
        </el-col>
      </el-row>

      <el-row class="content_txt">
        <el-col class="txt">{{lang ==='cn'?$store.state.title.cn.pro:$store.state.title.en.pro}}</el-col>
      </el-row>
      <el-row class="commodity" v-show="productTypeList.length>0">
        <el-row class="btn">
          <el-col
            :class=" commodityIndex !==1?'btn_info ':'btn_info btn_active'"
            :span="8"
            @click.native="commodity(1)"
          >
            {{productTypeList[0].title}}
            <div class="ico" v-show="commodityIndex === 1"></div>
          </el-col>
          <el-col
            :class=" commodityIndex !==2?'btn_info ':'btn_info btn_active'"
            :span="8"
            @click.native="commodity(2)"
          >
            {{productTypeList[1].title}}
            <div class="ico" v-show="commodityIndex === 2"></div>
          </el-col>
          <el-col
            :class=" commodityIndex !==3?'btn_info ':'btn_info btn_active'"
            :span="8"
            @click.native="commodity(3)"
          >
            {{productTypeList[2].title}}
            <div class="ico" v-show="commodityIndex === 3"></div>
          </el-col>
        </el-row>
        <el-row class="btm">
          <el-col class="btm_info">
            <transition name="el-fade-in-linear">
              <div class="img" v-show="commodityIndex === 1">
                <a
                  :href="productTypeList[0].link"
                  :alt="productTypeList[0].img_alt"
                  style="display: block;"
                  align="absbottom"
                >
                  <img :src="productTypeList[0].img_url" alt width="100%" />
                  <!-- <div class="img_txt">
                    <div class="title">紧凑型驱动伺服器Sapphire系列</div>
                    <div class="img_txt_info">紧凑型设计（紧凑型电源、驱动、电机），体积小...</div>
                    <div class="btn">产品详情</div>
                  </div>-->
                </a>
              </div>
            </transition>
            <transition name="el-fade-in-linear">
              <div class="img" v-show="commodityIndex === 2" style="display: block;">
                <a :href="productTypeList[1].link" :alt="productTypeList[1].img_alt">
                  <img :src="productTypeList[1].img_url" alt width="100%" align="absbottom" />
                </a>
              </div>
            </transition>
            <transition name="el-fade-in-linear">
              <div class="img" v-show="commodityIndex === 3" style="display: block;">
                <a :href="productTypeList[2].link" :alt="productTypeList[2].img_alt">
                  <img :src="productTypeList[2].img_url" alt width="100%" align="absbottom" />
                </a>
              </div>
            </transition>
          </el-col>
        </el-row>
      </el-row>
      <el-row class="content_txt">
        <el-col class="txt">{{lang ==='cn'?$store.state.title.cn.app:$store.state.title.en.app}}</el-col>
      </el-row>
      <el-row class="trade">
        <el-carousel height="447px" direction="horizontal" :autoplay="true">
          <el-carousel-item
            v-for="item in industryList"
            :key="item.id"
            v-show="industryList.length>0"
          >
            <!-- <h3 class="medium">{{ item.name }}</h3> -->
            <a :href="item.link">
              <img :src="item.image_info.image_url" alt width="100%" />
            </a>
          </el-carousel-item>
        </el-carousel>
      </el-row>
      <el-row class="content_txt">
        <el-col class="txt">{{lang ==='cn'?$store.state.title.cn.news:$store.state.title.en.news}}</el-col>
      </el-row>
      <el-row class="news" v-show="newsList">
        <el-row type="flex" justify="space-between">
          <!-- <el-col :span="5" >
            <div class="grid-content bg-purple">
              <div class="top">
                <img :src="newsList[0].image_info.image_url" alt width="100%" />
              </div>
              <div class="bottom">
                <div class="title over_two_lines">{{newsList[0].news_title}}</div>
                <div class="date">{{newsList[0].create_time}}</div>
                <div class="info over_two_lines">{{newsList[0].news_content}}</div>
              </div>
            </div>
          </el-col>-->

          <el-col :span="5" v-for="item in newsList" :key="item.news_id">
            <div class="grid-content">
              <div class="top">
                <img :src="item.img_index.image_url" alt width="100%" style="height: 160px;" />
              </div>
              <div class="bottom" style="height: 176px;">
                <div class="title over_two_lines">{{item.news_title}}</div>
                <div class="date">{{item.create_time}}</div>
                <div
                  class="info over_two_lines"
                  v-html="item.news_content"
                  style="overflow: hidden;max-height: 40px;"
                ></div>
              </div>
              <!-- <div style="padding-bottom: 10px;display: flex;justify-content: flex-end;padding-right: 10px;">
								<el-button size="mini" style="background: rgba(205, 0, 7, 1);color:#fff;display: inline;">更多</el-button>
              </div>-->
            </div>
          </el-col>
          <!-- <el-col :span="5">

          <el-col :span="5" v-for="item in newsList" :key="item.news_id">
            <div class="grid-content">
              <div class="top">
                <img :src="item.img_index.image_url" alt width="100%" />
              </div>
              <div class="bottom">
                <div class="title over_two_lines">{{item.news_title}}</div>
                <div class="date">{{item.create_time}}</div>
                <div class="info over_two_lines">{{item.subtitle}}</div>
              </div>
            </div>
          </el-col>
          <el-col :span="5">

            <div class="grid-content bg-purple">
              <div class="top">
                <img src="@/assets/banner/news.png" alt width="100%" />
              </div>
              <div class="bottom">
                <div class="title over_two_lines">Stone Motion Control为国产机器人厂商突围提供新选择</div>
                <div class="date">2020-02-06</div>
                <div class="info over_two_lines">随着机器人行业竞争的加剧，机器人价格持续降低...</div>
              </div>
            </div>
          </el-col>
          <el-col :span="5">
            <div class="grid-content bg-purple">
              <div class="top">
                <img src="@/assets/banner/news.png" alt width="100%" />
              </div>
              <div class="bottom">
                <div class="title over_two_lines">Stone Motion Control为国产机器人厂商突围提供新选择</div>
                <div class="date">2020-02-06</div>
                <div class="info over_two_lines">随着机器人行业竞争的加剧，机器人价格持续降低...</div>
              </div>
            </div>
          </el-col>-->
        </el-row>
        <el-row>
          <div
            class="more"
            @click="more"
          >{{lang ==='cn'?$store.state.title.cn.more:$store.state.title.en.more}}</div>
        </el-row>
      </el-row>
    </el-row>
  </div>
</template>

<script src="./banner.js">
</script>

<style lang='less'>
@import "./banner.less";
</style>
