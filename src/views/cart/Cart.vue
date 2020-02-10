<template>
  <div id="cart">
    <cart-nav-bar/>
    <scroll class="content">
      <cart-list/>
    </scroll>
    <cart-buttom-bar/>
  </div>
</template>

<script>
  import CartNavBar from "./childComps/CartNavBar";
  import Scroll from "../../components/common/scroll/Scroll";
  import CartList from "./childComps/CartList";
  import CartButtomBar from "./childComps/CartButtomBar";
  export default {
    name: "cart",
    components: {CartButtomBar, CartList, Scroll, CartNavBar}
  }
</script>

<style scoped>
  #cart {
    height: 100vh;
  }
  .content {
    overflow: hidden;
    height: calc(100% - 44px - 49px - 40px);
  }
</style>