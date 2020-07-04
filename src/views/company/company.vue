<template>
  <div id="company">
    <div class="block" id="img">
      <!-- <span class="demonstration">Click 指示器触发</span> -->
      <!-- <el-carousel trigger="click" :autoplay="true"> -->
      <!-- <el-carousel-item v-for="item in 4" :key="item"> -->
      <!-- <h3 class="small">{{ item }}</h3> -->
      <img :src="$store.state.company_banner" alt class="bannerImg" width="100%" />
      <!-- </el-carousel-item> -->
      <!-- </el-carousel> -->
    </div>
    <el-row class="layout_margin breadcrumb">
      <el-col>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item
            :to="{ path: '/' }"
          >{{lang ==='cn'?$store.state.title.cn.index:$store.state.title.en.index}}</el-breadcrumb-item>
          <el-breadcrumb-item>{{lang ==='cn'?$store.state.title.cn.company:$store.state.title.en.company}}</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
    </el-row>
    <el-row class="layout_margin ismc_btn">
      <el-col :span="7" :offset="17">
        <el-col :span="8">
          <div
            style="cursor:pointer;"
            :class=" btn_index==1?'ismc_btn_1 btn_active':'ismc_btn_1'"
            @click="companybBtn(1)"
          >{{lang ==='cn'?$store.state.title.cn.ismc:$store.state.title.en.ismc}}</div>
        </el-col>
        <el-col :span="8">
          <div
            style="cursor:pointer;"
            :class=" btn_index==2?'ismc_btn_1 btn_active':'ismc_btn_1'"
            @click="companybBtn(2)"
          >{{lang ==='cn'?$store.state.title.cn.join:$store.state.title.en.join}}</div>
        </el-col>
        <el-col :span="8">
          <div
            style="cursor:pointer;"
            :class=" btn_index==3?'ismc_btn_1 btn_active':'ismc_btn_1'"
            @click="companybBtn(3)"
          >{{lang ==='cn'?$store.state.title.cn.part:$store.state.title.en.part}}</div>
        </el-col>
      </el-col>
    </el-row>

    <!--   关于 ismc -->
    <el-row class="layout_margin company_content" v-show="btn_index == 1">
      <el-row>
        <el-col :span="18" class="company_content_img" :offset="3">
          <!-- <img src="@/assets/company/company.png" alt width="100%" /> -->
          <img :src="stoneList[0].image_info.image_url" alt width="100%" />
        </el-col>
      </el-row>
      <el-row class="company_content_info">
        <el-col :span="20" :offset="2">
          <div class="txt" v-html="stoneList[0].content"></div>
        </el-col>
      </el-row>
      <el-row class="company_content_btm">
        <el-col :span="3" :offset="2">
          <div class="btm_info">
            <div class="top">
              <img src="@/assets/company/btmico.png" alt width="100%" />
            </div>
            <div class="btm">
              <div class="num">4+</div>
              <div
                class="txt"
              >{{lang ==='cn'?$store.state.title.cn.cycle:$store.state.title.en.cycle}}</div>
            </div>
          </div>
        </el-col>
        <el-col :span="3" :offset="2">
          <div class="btm_info">
            <div class="top">
              <img src="@/assets/company/btmico1.png" alt width="100%" />
            </div>
            <div class="btm">
              <div class="num">10+</div>
              <div class="txt">{{lang ==='cn'?$store.state.title.cn.exp:$store.state.title.en.exp}}</div>
            </div>
          </div>
        </el-col>
        <el-col :span="3" :offset="2">
          <div class="btm_info">
            <div class="top">
              <img src="@/assets/company/btmico2.png" alt width="100%" />
            </div>
            <div class="btm">
              <div class="num">20+</div>
              <div
                class="txt"
              >{{lang ==='cn'?$store.state.title.cn.process:$store.state.title.en.process}}</div>
            </div>
          </div>
        </el-col>
        <el-col :span="3" :offset="2">
          <div class="btm_info">
            <div class="top">
              <img src="@/assets/company/btmico3.png" alt width="100%" />
            </div>
            <div class="btm">
              <div class="num">3+</div>
              <div
                class="txt"
              >{{lang ==='cn'?$store.state.title.cn.test_c:$store.state.title.en.test_c}}</div>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-row>

    <!-- 合作伙伴 -->
    <el-row class="layout_margin company_content" v-show="btn_index == 3">
      <el-row class="content_list">
        <el-row class="list_margin">
          <el-col :span="5" :offset="1" v-for="item in bannerList" :key="item.banner_id">
            <img :src="item.image_info.image_url" alt width="100%" />
          </el-col>
        </el-row>
      </el-row>
      <el-row class="content_btm">
        <el-col :span="10" class="left">
          <img src="@/assets/company/map.png" alt width="100%" />
        </el-col>
        <el-col :span="12" :offset="2" class="right">
          <div class="title" v-if="lang === 'cn'">服务全国</div>
          <div class="title" v-else-if="lang ==='en'">Serve the whole country</div>
          <div
            class="info" v-if="lang === 'cn'"
          >&nbsp; &nbsp;我们服务于全国各地，致力于推动产品开发，生产和销售，我们决心成为世界一流的驱动设备供应商。向用户学习，向优秀竞争对手学习，不断挑战自己，超越自我，不断创新和变革，并引领行业技术，营销和服务模式的未来。以客户为中心，继续为客户创造价值目标。致力于技术进步和具有自主知识产权的技术创新。认真负责和管理有效的员工是公司最大的资产。为振兴中国的工业控制产业，员工和家人的幸福做出不懈的努力。我们持续探索机器人技术的新边界，赋予机器人智能和连接的新属性，拓展机器人应用的新领域。这条路上，我们邀您一起用机器人解放双手，用机器人改善生活，用机器人改变世界！</div>
          <div class="info" v-else-if=" lang === 'en'">We serve all over the country, committed to promote product development, production and sales, we are determined to become the world's first-class drive equipment suppliers. Learn from users, learn from excellent competitors, constantly challenge themselves, surpass themselves, constantly innovate and change, and lead the future of industry technology, marketing and service mode. Focus on customers and continue to create value goals for customers. It is committed to technological progress and technological innovation with independent intellectual property rights. Responsible and effective staff management is the biggest asset of the company. For the revitalization of China's industrial control industry, the happiness of employees and families to make unremitting efforts.</div>
        </el-col>
      </el-row>
    </el-row>

    <!-- 加入我们 -->
    <el-row class="layout_margin company_content" v-show="btn_index == 2">
      <el-row class="join">
        <el-col class="left" :span="10" :offset="1">
          <img src="@/assets/company/join.png" alt width="100%" />
        </el-col>
        <el-col class="right" :span="10" :offset="1">
          <div class="right_info" v-if="lang ==='cn'">
            我们持续探索机器人技术的新边界，
            赋予机器人智能和连接的新属性，
            拓展机器人应用的新领域。
            这条路上，我们邀您一起
            用机器人解放双手，用机器人改善生活，用机器人改变世界！
          </div>
          <div class="right_info" v-if="lang ==='en'">
            We continue to explore new frontiers of robotics，
            New attributes for robot intelligence and connectivity，
            Expand the new field of robot application.
            Along the way, we invite you to join us
            Free hands with robots, improve life with robots, change the world with robots!
          </div>
          <div class="right_mail"><span v-if="lang==='en' ">Contact information :</span> <span v-else-if="lang ==='cn'">联系方式：</span> hr@istonemc.com</div>
        </el-col>
      </el-row>
      <el-row class="jobs">
        <el-row class="jobs_list">
          <el-col
            :span="6"
            class="jobs_c"
            :offset="1"
            v-for="item in joinList"
            :key="item.id"
            @click.native="goInfo(item.id)"
          >{{item.title}}</el-col>
          <!-- <el-col :span="6" class="jobs_c" :offset="2">测试工程师</el-col>
          <el-col :span="6" class="jobs_c" :offset="2">测试工程师</el-col>-->
        </el-row>
      </el-row>
    </el-row>
  </div>
</template>

<script src='./company.js'>
</script>

<style lang= 'less'>
@import "./company.less";
</style>
