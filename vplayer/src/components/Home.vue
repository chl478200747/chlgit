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
    <div class="main"  ref="viewBox">
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
        <swiper
          :list="bannerList"
          v-model="bannerIndex"
          @on-index-change="bannerIndexChange"
          auto
          height="110px"
          dots-position="center"
        ></swiper>
        <!-- <x-button @click.native="bannerIndex = 0">go to 0</x-button>
        <x-button @click.native="bannerIndex = 1">go to 1</x-button>-->
      </div>
      <!-- 滚动盒子 -->
      <view-box>
        <!-- 最新电影 -->
        <div class="partition-header">
          <h4>最新</h4>
          <a href="javascript:;" class="icon-more"></a>
        </div>
        <div class="partition">
          <div class="movie-card" v-for="item in theMovieList1" :key="item.id">
            <div class="card-content clearfix">
              <div class="movie-img"></div>
              <div class="movie-info">
                <h5 class="movie-title">{{item.name}}</h5>
                <div class="movie-grade">
                  <rater font-size="4" v-model="tmpRater"></rater>
                  <span class="movie-score">{{item.scoreStar}}</span>
                </div>
                <div class="movie-info-text movie-notice">{{item.notice}}</div>
                <div class="movie-info-text movie-introduce">{{item.comment2}}</div>
                <div class="movie-info-text movie-remarks">{{item.comment3}}</div>
              </div>
              <div class="movie-other">
                <div class="clearfix">
                  <div class="watch-num">{{item.watch}}</div>
                  <div class="icon-watch"></div>
                </div>
                <a href="javascript:;" class="buy-ticket">购票</a>
              </div>
            </div>
            <div class="tool-btns clearfix">
              <div class="tool-btn wish-combo">
                <div class="icon-wish"></div>
                <div class="btn-text">想看</div>
              </div>
              <div class="tool-btn collection-combo">
                <div class="icon-collection"></div>
                <div class="btn-text">收藏</div>
              </div>
              <div class="tool-btn comment-combo">
                <div class="icon-comment"></div>
                <div class="btn-text">30</div>
              </div>
            </div>
          </div>
        </div>
      </view-box>
    </div>
    <!-- 底部菜单组件 -->
    <Menu></Menu>
  </div>
</template>

<script>
import { Tab, TabItem, Swiper, Rater } from "vux";
import BScroll from 'better-scroll';
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
          img: "./static/images/swiper/banner1.png"
          // title: "ceshi1"
        },
        {
          url: "javascript:;",
          img: "./static/images/swiper/banner2.png"
          // title: "ceshi2"
        }
      ],
      tmpRater: 5,
      // 电影CARD数据
      theMovieList1: [
        {
          id: 1,
          name: "决战食神",
          score: 8.1,
          scoreStar: parseInt((8.1 / 10) * 5),
          notice: "今天122家影院放映",
          comment2: "厨神争头筹，爱情遇阴谋",
          comment3: "新春影片中的黑马",
          watch: 300
        },
        {
          id: 2,
          name: "极限特工：终极回归",
          score: 7.6,
          scoreStar: parseInt((8.1 / 10) * 5),
          notice: "今天68家影院放映",
          comment2: "特工再回归，英雄组团来",
          comment3: "范迪塞尔练手甄子丹挑战极限动作",
          watch: 243
        },
        {
          id: 3,
          name: "决战食神",
          score: 8.1,
          scoreStar: parseInt((8.1 / 10) * 5),
          notice: "今天122家影院放映",
          comment2: "厨神争头筹，爱情遇阴谋",
          comment3: "新春影片中的黑马",
          watch: 300
        },
      ]
    };
  },
  methods: {
    // 滚动初始化
    initScroll() {
      this.viewBox = new BScroll(this.$refs.viewBox, {});
    },
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
  created () {
    this.initScroll();
  },
  components: {
    Tab,
    TabItem,
    Swiper,
    Rater,
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
.main {
  height: 60%;
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

.partition-header {
  width: 100%;
  height: 40px;
  padding: 0 8px;
  box-sizing: border-box;
}
.partition-header h4 {
  float: left;
  width: 20%;
  line-height: 40px;
  font-size: 24px;
  font-weight: bold;
  color: #1f1f1f;
}
.icon-more {
  float: right;
  width: 12px;
  height: 20px;
  background: url(../assets/images/icon_arrow_gray.png) no-repeat center;
  background-size: 100%;
  margin-top: 10px;
}
.partition {
  width: 100%;
  padding: 0 8px;
  box-sizing: border-box;
}
.movie-card {
  width: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  padding: 15px;
  border-radius: 4px;
  box-sizing: border-box;
  margin-bottom: 10px;
}
.card-content {
  width: 100%;
  margin-bottom: 15px;
}
.movie-img {
  float: left;
  width: 60px;
  height: 90px;
  background: url(../assets/movieImages/juezhanshishen.png) no-repeat center;
  background-size: 100%;
}
.movie-info {
  float: left;
  width: calc(100 - 120px);
  padding-left: 10px;
  box-sizing: border-box;
}
.movie-other {
  float: right;
  width: 60px;
}
.icon-watch {
  float: right;
  width: 22px;
  height: 14px;
  background: url(../assets/images/watch.png) no-repeat center;
  background-size: 100%;
  margin-right: 8px;
}
.watch-num {
  float: right;
  font-size: 14px;
  color: #c9c9c9;
}
.buy-ticket {
  display: block;
  margin-top: 20px;
  width: 60px;
  height: 27px;
  line-height: 27px;
  background-color: #97c4d3;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
}
.movie-info-text {
  height: 20px;
  line-height: 20px;
  font-size: 12px;
  color: #696464;
}
.movie-grade {
  height: 20px;
  line-height: 20px;
}
.movie-score {
  font-size: 12px;
  font-style: italic;
  color: #f2a448;
}
.tool-btn {
  float: left;
  margin-right: 30px;
}
.icon-wish {
  display: inline-block;
  width: 15px;
  height: 12px;
  background: url(../assets/images/mind.png) no-repeat center;
  background-size: 100%;
}
.icon-collection {
  display: inline-block;
  width: 14px;
  height: 12px;
  background: url(../assets/images/star.png) no-repeat center;
  background-size: 100%;
}
.icon-comment {
  display: inline-block;
  width: 14px;
  height: 12px;
  background: url(../assets/images/comment.png) no-repeat center;
  background-size: 100%;
}
.btn-text {
  display: inline-block;
  font-size: 12px;
  color: #c9c9c9;
  vertical-align: middle;
}
.home .weui-tabbar {
  position: fixed;
}
</style>
