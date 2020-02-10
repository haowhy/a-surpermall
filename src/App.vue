<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>

    <main-tab-bar>

    </main-tab-bar>
  </div>
</template>

<style>
  @import "./assets/css/base.css";
</style>
<script>
  import TabBar from "./components/common/tabbar/TabBar";
  import TabBarItem from "./components/common/tabbar/TabBarItem";
  import MainTabBar from "./components/content/MainTabBar/MainTabBar";

  export default {
    components: {
      MainTabBar,
      TabBarItem,
      TabBar
    }
  }
</script>