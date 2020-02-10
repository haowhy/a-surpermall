<template>
  <div class="list-item">
    <div class="check">
      <check-button :isChecked="product.isChecked" @btnClick="btnClick"/>
    </div>
    <div class="left">
      <img :src="product.image" alt="商品图片">
    </div>
    <div class="right">
      <div class="title">{{product.title}}</div>
      <div class="desc">{{product.desc}}</div>
      <div class="item-box">
        <div class="price">￥{{product.realPrice}}</div>
        <div class="count">x{{product.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import CheckButton from "../../../components/content/checkbutton/CheckButton";
  export default {
    name: "CartListItem",
    components: {CheckButton},
    props:  {
      product: {
        type:Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      btnClick() {
        this.product.isChecked = !this.product.isChecked
      }
    }
  }
</script>

<style scoped>
  .list-item {
    width: 100%;
    display: flex;
    padding: 10px;
    border-bottom: 1px solid #ccc;
  }
  .check {
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .left {
    padding: 5px;
  }
  .left img{
    display: block;
    width: 80px;
    height: 100px;
    border-radius: 8px;
  }
  .right {
    font-size: 17px;
    color: #333;
    padding: 5px 10px;
    position: relative;
    overflow: hidden;
  }
  .title {
    /*display: inline-block;*/
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 20px;
  }
  .desc {
    font-size: 14px;
    color: #666;
    margin-top: 15px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .item-box {
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    color: orangered;
  }
</style>