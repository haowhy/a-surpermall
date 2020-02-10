<template>
  <div class="goodsItem" @click="itemClick">
    <img :src="showImage" alt="" @load="imgLoad">
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="goods-info-price">{{goodsItem.price}}</span>
      <span class="goods-info-collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsItem",
    props: {
      goodsItem: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      imgLoad() {
        this.$bus.$emit('itemImageLoad')

        // if(this.$route.path.indexOf('/home')){
        //   this.$bus.$emit('itemImageLoad')
        // }else if()
      },
      itemClick() {
        this.$router.replace('/detail/' + this.goodsItem.iid)
      }
    },
    computed: {
      showImage() {
        return this.goodsItem.image || this.goodsItem.show.img
      }
    }
  }
</script>

<style scoped>
  .goodsItem {
    padding-bottom: 40px;
    position: relative;
    width: 48%;
  }
  .goodsItem img {
    width: 100%;
    border-radius: 5px;
  }
  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    text-align: center;
    overflow: hidden;
  }
  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }
  .goods-info-price {
    color: var(--color-tint);
    margin-right: 20px;
  }
  .goods-info-collect {
    position: relative;
  }
  .goods-info-collect::before {
    position: absolute;
    left: -15px;
    top: -1px;
    content: '';
    height: 14px;
    width: 14px;
    background: url("~assets/img/common/collect.svg")0 0/14px 14px;
  }
</style>