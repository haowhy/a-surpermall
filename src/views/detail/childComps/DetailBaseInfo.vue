<template>
  <div  v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="n-price">{{goods.newPrice}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
    </div>
    <div class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item" v-for="index in (goods.services.length-1)" :key="index">
        <img :src="goods.services[index-1].icon" alt="">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBaseInfo",
    props: {
      goods: {
        type: Object
      }
    }
  }
</script>

<style scoped>
  .base-info {
    margin-top: 15px;
    padding: 0 8px;
    color: #999;
    border-bottom: 5px solid #f2f5f8;
  }
  .info-title {
    color: #222;
  }
  .info-price {
    margin-top: 10px;
  }
  .info-price .n-price {
    font-size: 24px;
    color: var(--color-tint);
  }
  .info-price .o-price {
    font-size: 13px;
    margin-left: 5px;
    text-decoration: line-through;
  }
  .discount {
    background: var(--color-tint);
    border-radius: 6px;
    border: 5px solid var(--color-tint);
    color: #f6f6f6;
    font-size: 13px;
    margin-left: 10px;
  }
  .info-other {
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
  }
  .info-service {
    margin-top: 15px;
    display: flex;
  }
  .info-service-item {
    flex: 1;
    height: 30px;
    line-height: 30px;
    text-align: left;
    color: #222;
  }
  .info-service-item img {
    width: 13px;
  }
</style>