<template>
  <nav-bar class="nav-bar">
    <div slot="center">
      购物车({{$store.state.cartList.length}})
    </div>
  </nav-bar>
</template>

<script>
  import NavBar from "../../../components/common/navbar/NavBar";
  export default {
    name: "CartNavBar",
    components: {NavBar}
  }
</script>

<style scoped>
  .nav-bar {
    background-color: var(--color-tint);
    color: #f6f6f6;
    font-size: 20px;
  }
</style>