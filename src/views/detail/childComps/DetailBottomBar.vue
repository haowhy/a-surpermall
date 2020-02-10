<template>
  <div class="bottom-bar">
    <div class="left item">
      <div class="item">
        <i class="icon-1"></i>
        <span>客服</span>
      </div>
      <div class="item">
        <i class="icon-2"></i>
        <span>店铺</span>
      </div>
      <div class="item">
        <i class="icon-3"></i>
        <span>收藏</span>
      </div>
    </div>
    <div class="right item">
      <div class="cart item" @click="addToCart">加入购物车</div>
      <div class="buy item">购买</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBottomBar",
    methods: {
      addToCart() {
        this.$emit('addProduct')
      }
    }
  }
</script>

<style scoped>
  .bottom-bar {
    height: 49px;
    background-color: #f6f6f6;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
  }
  .item {
    flex: 1;
    height: 49px;
    text-align: center;
    /*background-color: black;*/
  }
  .left {
    height: 49px;
    /*background-color: red;*/
    display: flex;
  }
  .icon-1 {
    background: url("~assets/img/detail/detail_bottom.png")0 -54px/100%;
    width: 22px;
    height: 22px;
    display: block;
    margin: 5px auto 3px;
  }
  .icon-2 {
    background: url("~assets/img/detail/detail_bottom.png")0 -98px/100%;
    width: 22px;
    height: 22px;
    display: block;
    margin: 5px auto 3px;
  }
  .icon-3 {
    background: url("~assets/img/detail/detail_bottom.png")0 0/100%;
    width: 22px;
    height: 22px;
    display: block;
    margin: 5px auto 3px;
  }
  .right {
    display: flex;
    /*justify-content: space-evenly;*/
    line-height: 49px;
    text-align: center;
  }
  .right .cart {
    background-color: #ffe817;
    color: #333;
  }
  .right .buy {
    background-color: #f69;
    color: #f6f6f6;
  }
</style>