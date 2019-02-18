<template>
  <div class="menu">
    <!-- 底部导航菜单 -->
    <tabbar>
      <tabbar-item>
        <img slot="icon" src="../assets/demo/icon_nav_button.png">
        <span slot="label">影院</span>
      </tabbar-item>
      <tabbar-item show-dot>
        <!-- <img slot="icon" src="../assets/demo/icon_nav_msg.png"> -->
        <span slot="label">影圈</span>
      </tabbar-item>
      <tabbar-item selected link="/component/demo">
        <!-- <img slot="icon" src="../assets/demo/icon_nav_article.png"> -->
        <span slot="label">电影</span>
      </tabbar-item>
      <tabbar-item badge="2">
        <!-- <img slot="icon" src="../assets/demo/icon_nav_cell.png"> -->
        <span slot="label">卖票</span>
      </tabbar-item>
      <tabbar-item badge="2">
        <!-- <img slot="icon" src="../assets/demo/icon_nav_cell.png"> -->
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import {Tabbar, TabbarItem} from 'vux'

export default {
  name: "menu",
  components: {
      Tabbar,
      TabbarItem
  }
};
</script>

<style>
</style>
