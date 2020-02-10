<template>
    <div class="detailSwiper">
      <swiper class="sswiper">
        <swiper-item v-for="item in topImages">
          <img :src="item" alt="">
        </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import {Swiper,SwiperItem} from "components/common/swiper";
  export default {
    name: "DetailSwiper",
    components: {
      Swiper,
      SwiperItem,
    },
    props: {
      topImages: {
        type: Array,
        default () {
          return []
        }
      }
    },
    created() {
      // console.log(this.topImages);
    }
  }
</script>

<style scoped>
  .sswiper{
    height: 300px;
    overflow: hidden;
  }
</style>