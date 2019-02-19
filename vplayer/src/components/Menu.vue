<template>
  <div class="menu">
    <!-- 底部导航菜单 -->
    <tabbar>
      <tabbar-item>
        <img slot="icon" src="../assets/menu/icon_yingyuan.png">
        <span slot="label">影院</span>
      </tabbar-item>
      <tabbar-item>
        <img slot="icon" src="../assets/menu/icon_yingquan.png">
        <span slot="label">影圈</span>
      </tabbar-item>
      <tabbar-item class="tabbar-item-center" link="#">
        <div slot="icon" class="icon-wrap">
          <img src="../assets/menu/icon_dianying.png">
        </div>
        <span slot="label">电影</span>
      </tabbar-item>
      <tabbar-item>
        <img slot="icon" src="../assets/menu/icon_maipiao.png">
        <span slot="label">卖票</span>
      </tabbar-item>
      <tabbar-item>
        <img slot="icon" src="../assets/menu/icon_wode.png">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from "vux";

export default {
  name: "menu",
  components: {
    Tabbar,
    TabbarItem
  }
};
</script>

<style>
a {
  text-decoration: none;
}
.menu .weui-tabbar {
  background-color: #8cc5d8 !important;
}
.menu .weui-tabbar__label {
  color: #fff;
}
.menu .icon-wrap {
  width: 50px;
  height: 50px;
  background-color: #FFF;
  border-radius: 50%;
  margin-top: -25px;
}
.menu .icon-wrap img {
  width: 44px;
  height: 44px;
  margin-top: 3px;
}
.menu .tabbar-item-center .weui-tabbar__icon {
  width: auto;
  height: auto;
}
</style>
