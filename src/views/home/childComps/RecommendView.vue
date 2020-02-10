<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommendItem">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "RecommendView",
    props: {
      recommends: {
        type: Array,
        default: []
      }
    }
  }
</script>

<style scoped>
  .recommend{
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-content: center;
    margin: 15px 0 20px 0;
}
  .recommendItem{
    flex: 1;
    text-align: center;
  }
  .recommendItem img {
    width: 80px;
    height: 80px;
  }
</style>