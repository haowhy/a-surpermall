<template>
  <div>
    <nav-bar>
      <div slot="left" @click="backClick" class="back">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div class="title" slot="center" >
        <div class="title-text" v-for="(item,index) in titles" :class="{active:index === currentIndex}" @click="btnClick(index)">{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "../../../components/common/navbar/NavBar";
  export default {
    name: "DetailNavBar",
    components: {NavBar},
    // props: {
    //   currentIndex: {
    //     type:Number,
    //     default() {
    //       return 0
    //     }
    //   }
    // },
    data() {
      return {
        titles: ['商品','参数','评论','推荐'],
        currentIndex: 0,
        path:''
      }
    },
    methods: {
      btnClick(index) {
        // console.log(index);
        this.currentIndex = index
        this.$emit('btnClick',index)
      },
      backClick() {
        this.$router.replace('/home')
      //   this.$router.beforeEach((to, from, next) => {
      //     this.path = from.path
      //     next()
      //   })
      //   this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>
  .active {
    color: var(--color-tint);
  }
  .title {
    display: flex;
    flex-wrap: nowrap;
    /*justify-content: center;*/
    /*align-content: center;*/
    /*width: 100%;*/
  }
  .title-text {
    flex: 1;
  }
  .back img {
    margin-top: 12px;
  }
</style>