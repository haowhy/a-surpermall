<template>
  <div id="detail">
    <detail-nav-bar @btnClick="btnClick" ref="nav"/>
    <scroll :probe-type="probeType"
            class="content"
            @scroll="contentScroll"
            ref="scroll">
      <detail-swiper :topImages="topImages"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad" />
      <detail-param-info :paramInfo="paramInfo" ref="params"/>
      <comment-info :commentInfo="commentInfo" ref="comment"/>
      <goods-list :goods="recommends" ref="recommend"/>
    </scroll>
    <detail-bottom-bar @addProduct="addProduct"/>
    <back-top @click.native="backClick" v-show="isShow"/>
  </div>
</template>

<script>
  import DetailNavBar from "./childComps/DetailNavBar";
  import {getDetail, Goods, Shop, GoodsParam, getRecommend} from "../../network/detail";
  import DetailSwiper from "./childComps/DetailSwiper";
  import DetailBaseInfo from "./childComps/DetailBaseInfo";
  import DetailShopInfo from "./childComps/DetailShopInfo";
  import Scroll from "../../components/common/scroll/Scroll";
  import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
  import DetailParamInfo from "./childComps/DetailParamInfo";
  import CommentInfo from "./childComps/CommentInfo";
  import GoodsList from "../../components/content/goods/GoodsList";
  import BackTop from "../../components/content/backtop/BackTop";
  import DetailBottomBar from "./childComps/DetailBottomBar";
  export default {
    name: "Detail",
    components: {
      DetailBottomBar,
      BackTop,
      GoodsList,
      CommentInfo,
      DetailParamInfo,
      DetailGoodsInfo,
      Scroll,
      DetailShopInfo,
      DetailBaseInfo,
      DetailSwiper,
      DetailNavBar},
    data() {
      return {
        iid: null,
        topImages: [],
        goods: {},
        shop: {},
        probeType: 3,
        detailInfo:{},
        paramInfo: {},
        commentInfo: {},
        recommends: [],
        isShow: false,
        themeTopYs: [],
        currentIndex:null
      }
    },
    created() {
      // 1.存iid
      this.iid = this.$route.params.iid
      //请求数据
      getDetail(this.iid).then(res => {
        // console.log(res);
        const data = res.result
        this.topImages = data.itemInfo.topImages;
        // console.log(this.topImages)
        // 用类整合数据一起传给子组件
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);

        this.shop = new Shop(data.shopInfo);

        this.detailInfo = data.detailInfo;

        this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)

        if(data.rate.cRate !== 0) {
          this.commentInfo = data.rate.list[0]
        }
        // this.$nextTick(() => {
        //   this.themeTopYs.push(0)
        //   this.themeTopYs.push(this.$refs.params.$el.offsetTop)
        //   this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
        //   this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
        //   console.log(this.themeTopYs);
        // })
      })
      getRecommend().then(res => {
        // console.log(res);
        this.recommends = res.data.list
      })
    },
    mounted() {
    },
    methods: {
      imageLoad() {
        this.$refs.scroll.refresh()
        this.$nextTick(() => {
          this.themeTopYs.push(0)
          this.themeTopYs.push(this.$refs.params.$el.offsetTop)
          this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
          this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
          // console.log(this.themeTopYs);
        })
      },
      backClick() {
        this.$refs.scroll.scrollTo(0,0,500);
        this.$refs.scroll.refresh()
      },
      contentScroll(position) {
        let positionY = -position.y
        let length = this.themeTopYs.length
        for(let i = 0 ; i < this.themeTopYs.length ; i++) {
          // if(positionY>this.themeTopYs[i] && positionY<this.themeTopYs[i+1]){
          //   console.log(i)
          // }
          if(this.currentIndex !== i && ((i < length-1 && positionY>this.themeTopYs[i] && positionY<this.themeTopYs[i+1]) || (i === length-1 &&
              positionY>this.themeTopYs[i]))){
            this.currentIndex = i
            // console.log(this.currentIndex);
            this.$refs.nav.currentIndex = this.currentIndex
          }
        }



        this.isShow = position.y < -1000
      },
      btnClick(index) {
        this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],500)
      },
      addProduct() {
        const product = {}
        product.iid = this.iid
        product.desc = this.goods.desc
        product.image = this.topImages[0]
        product.realPrice = this.goods.realPrice
        product.title = this.goods.title

        // this.$store.commit('addCart',product)
        // console.log(product);
        this.$store.dispatch('addCart',product).then(res => {
          this.$toast.show(res,1500)
        })
      }
    }
  }
</script>

<style scoped>
  #detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }
  .content {
    /*方法1*/
    overflow: hidden;

    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;

    /*方法2*/
    /*height: calc(100% - 44px);*/
  }
  .back {
    position: relative;
    z-index: 10;
  }
</style>