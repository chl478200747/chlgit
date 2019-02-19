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
        <div class="tab-item" :class="{select:tabShow==1}">
          <div class="tab-item-title">正在热映</div>
        </div>
        <div class="tab-item" :class="{select:tabShow==2}">
          <div class="tab-item-title">即将上映</div>
        </div>
      </div>
    </div>
    <!-- 底部菜单组件 -->
    <Menu></Menu>
  </div>
</template>

<script>
import { Tab, TabItem } from "vux";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import func from "./vue-temp/vue-editor-bridge";

export default {
  name: "Home",
  data() {
    return {
      tabShow: 1
    };
  },
  methods: {
    isHit: function() {
      this.tabShow = 1;
    },
    upComing: function() {
      this.tabShow = 2;
    }
  },
  components: {
    Tab,
    TabItem,
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
  line-height: 32px;
  padding: 4px;
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
