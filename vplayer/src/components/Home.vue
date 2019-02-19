<template>
  <div class="home">
    <!-- 头部菜单 -->
    <div class="header">
      <div class="aside-item pl">
        <span class="area-label">成都</span>
        <span class="icon-arrow"></span>
      </div>
      <div class="center-item">
        <input type="text" placeholder="找影视剧、影院、影人">
      </div>
      <div class="aside-item pr">
        <span class="icon-list"></span>
      </div>
    </div>
    <!-- 首页内容 -->
    <div class="main">
      <div class="tab">
        <div class="tab-item" :class="{select:tabShow==1}" @click="isHit()">
          <div class="tab-item-title">正在热映</div>
        </div>
        <div class="tab-item" :class="{select:tabShow==2}" @click="upComing()">
          <div class="tab-item-title">即将上映</div>
        </div>
      </div>
      <!-- 轮播 -->
      <div class="banner-box">
        <swiper :list="bannerList" v-model="bannerIndex" @on-index-change="bannerIndexChange"
          auto
          height="110px"
          dots-position="center"
        ></swiper>
        <!-- <x-button @click.native="bannerIndex = 0">go to 0</x-button>
        <x-button @click.native="bannerIndex = 1">go to 1</x-button> -->
      </div>

    </div>
    <!-- 底部菜单组件 -->
    <Menu></Menu>
  </div>
</template>

<script>
import { Tab, TabItem, Swiper } from "vux";
import Header from "@/components/Header";
import Menu from "@/components/Menu";

export default {
  name: "Home",
  data() {
    return {
      tabShow: 1,
      // 轮播数据
      bannerIndex: 0,
      bannerList: [
        {
          url: "javascript:;",
          img: "./static/images/swiper/banner1.png",
          title: "ceshi1"
        },
        {
          url: "javascript:;",
          img: "./static/images/swiper/banner2.png",
          title: "ceshi2"
        }
      ]
    };
  },
  methods: {
    isHit: function() {
      this.tabShow = 1;
    },
    upComing: function() {
      this.tabShow = 2;
    },
    // 轮播方法
    bannerIndexChange(index) {
      this.bannerIndex = index;
    }
  },
  components: {
    Tab,
    TabItem,
    Swiper,
    Menu
  }
};
</script>

<style scope>
.header {
  position: relative;
  width: 100%;
  height: 65px;
  background-color: #8cc5d8;
}
.aside-item {
  position: absolute;
  bottom: 18px;
}
.aside-item.pl {
  left: 18px;
}
.aside-item.pr {
  right: 18px;
}
.area-label {
  float: left;
  display: block;
  font-family: "Microsoft YaHei";
  font-size: 14px;
  color: #fff;
}
.icon-arrow {
  float: left;
  display: block;
  margin-left: 4px;
  width: 10px;
  height: 10px;
  background: url(../assets/images/icon_arrow.png) no-repeat center;
  background-size: 100%;
}
.icon-list {
  float: left;
  display: block;
  width: 27px;
  height: 14px;
  background: url(../assets/images/icon_list.png) no-repeat center;
  background-size: 100%;
}
.center-item {
  position: absolute;
  left: 50%;
  bottom: 10px;
  width: 240px;
  height: 35px;
  margin-left: -120px;
  border-radius: 17px;
  background-color: #72b5cb;
}
.center-item input {
  width: 205px;
  height: 100%;
  margin-left: 17px;
  text-align: center;
  border: none;
  outline: none;
  background-color: #72b5cb;
  font-size: 14px;
  color: #fff;
}
input::-webkit-input-placeholder {
  color: #fff;
}
input::-moz-placeholder {
  color: #fff;
}
input::-moz-placeholder {
  color: #fff;
}
/* 导航 */
.tab {
  width: 100%;
  height: 40px;
  background-color: #b5d5e0;
}
.tab-item {
  float: left;
  width: 50%;
  height: 100%;
  line-height: 36px;
  padding: 2px;
  box-sizing: border-box;
}
.tab-item-title {
  width: 100%;
  height: 100%;
  color: #262c2e;
  border-radius: 4px;
  text-align: center;
}
.select .tab-item-title {
  color: #fff;
  background-color: #81bbce;
}

</style>
