<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control
            :titles="['流行', '新款', '精选']"
            class="tab-control"
            @tabClick="tabClick"
            ref="tabControl1"
            v-show="isShowTab"/>
    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            @scroll="contentScroll"
            :pull-up-load="true"
            @pullingUp="loadMore">
      <home-swiper :banners="banners" @swiperImgLoad="swiperImgLoad"/>
      <recommend-view :recommends="recommends"/>
      <feature-view/>
      <tab-control
          :titles="['流行', '新款', '精选']"
          class="tab-control"
          @tabClick="tabClick"
          ref="tabControl2"/>
      <goods-list :goods="showGoods"/>
    </scroll>
    <back-top @click.native="backClick" v-show="isShow"/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "../../components/common/navbar/NavBar";
import HomeSwiper from "./childComps/HomeSwiper";
import BScroll from "better-scroll"
import {getHomeMultidata,getHomeGoods} from "../../network/home";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/featureView";
import TabControl from "../../components/content/TabControl/TabControl";
import Scroll from "../../components/common/scroll/Scroll";
import BackTop from "../../components/content/backtop/BackTop";
import GoodsList from "../../components/content/goods/GoodsList";



export default {
  name: 'home',
  components: {
    GoodsList,
    BackTop,
    Scroll,
    TabControl,
    FeatureView,
    RecommendView,
    NavBar ,
    HomeSwiper
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop' : {page: 0, list:[]},
        'new' : {page: 0, list:[]},
        'sell' : {page: 0, list:[]}
      },
      currentType: 'pop',
      isShow: false,
      tabOffsetTop: 0,
      isShowTab: false,
      saveY: 0
    }
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  },
  created() {
    this.getHomeMultidata();
    // getHomeGoods('pop',1).then(res => {
    //   console.log(res);
    // })
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');

  },
  mounted() {
    // new BScroll(document.querySelector('.wrapper'))
    const refresh =this.debounce(this.$refs.scroll.refresh,200)
    this.$bus.$on('itemImageLoad', () => {
      refresh()
    })
  },
  activated() {
    // this.$setgoindex()

    this.$refs.scroll.scrollTo(0,-this.saveY)
  },
  deactivated() {
    this.saveY = this.$refs.scroll.scroll.positionY
  },
  methods: {
    getHomeMultidata(){
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list
      })
    },
    getHomeGoods(type){
      // console.log(type);
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        // console.log(res);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        // console.log(this.goods[type].list)
        // console.log(this.goods[type].page);
        this.$refs.scroll.finishPullUp()
      })
    },
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index
    },
    backClick() {
      this.$refs.scroll.scrollTo(0,0,500)
      // scrollTo(x , y , time)
      this.$refs.scroll.refresh()
    },
    contentScroll(position) {
      // console.log(position);
      // 显示置顶判断
      this.isShow = position.y < -1000
      // 吸顶判断
      this.isShowTab = position.y < -this.tabOffsetTop
    },
    loadMore() {
      this.getHomeGoods(this.currentType)
    },
    swiperImgLoad() {
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
      // console.log(this.tabOffsetTop)
    },
    // 防抖函数
    debounce(func, delay) {
      let timer = null
      return function (...args) {
        if(timer)clearTimeout(timer)
        timer = setTimeout(()=>{
          func.apply(this, args)
        },delay)
      }
    },
  }
}
</script>

<style scoped>
  #home {
    position: relative;
    /*padding-top: 44px;*/
    /*padding-bottom: 54px;*/
    height: 100vh;
  }
  .home-nav{
    background-color: var(--color-tint);
    color: #fff;
    /*position: fixed;*/
    /*top: 0;*/
    /*left: 0;*/
    /*right: 0;*/
    /*z-index: 9;*/
    width: 100%;
  }
  .tab-control{
    position: relative;
    z-index: 9;
    /*position: sticky;*/
    /*top: 44px;*/
    /*background: #fff;*/
    /*在加入了Scroll之后失效了 导航吸顶功能*/
  }
  .content {
    overflow: hidden;

    position: absolute;
    top: 44px;
    bottom: 48px;
    left: 0;
    right: 0;
  }
</style>
