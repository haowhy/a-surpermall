<template>
  <div class="tab-bar-item" @click="itemClick">
    <slot v-if="isActive" name="item-icon">

    </slot>
    <slot v-else name="item-icon-active">

    </slot>
    <div :style="activeStyle">
      <slot  name="item-text">

      </slot>
    </div>

<!--    <img src="../../assets/img/star.png" alt="">-->
<!--    <div>首页</div>-->
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props:{
      path: String,
      activeColor: {
        type: String,
        default: '#ff8198'
      }
    },
    data(){
      return{
        // isActive: false
      }
    },
    computed:{
      isActive() {
        return this.$route.path.indexOf(this.path)
      },
      activeStyle() {
        return this.isActive ? {} : {color :this.activeColor}
      }
    },
    methods:{
      itemClick() {
        this.$router.replace(this.path)
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    height: 49px;
    text-align: center;
    font-size: 12px;
  }
  .tab-bar-item img{
    width: 24px;
    height: 24px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
</style>
