<template>
  <div class="bottom-bar">
    <div class="left">
      <div>
        <check-button :is-checked="isCheckedAll" @btnClick="btnClick"/>
      </div>
      <span>全选</span>
    </div>
    <div class="middle">
      合计：￥{{totalPrice | showPrice}}
    </div>
    <div class="right" @click="settle">
      <span>去结算({{checkLength}})</span>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from "vuex"
  import CheckButton from "../../../components/content/checkbutton/CheckButton";
  export default {
    name: "CartButtomBar",
    components: {CheckButton},
    computed: {
      ...mapGetters({
        list:'cartList'}),
      totalPrice() {
        return this.$store.state.cartList.filter(item => {
          return item.isChecked
        }).reduce(((preValue, item) => {
          return preValue + item.realPrice * item.count
        }),0)
      },
      checkLength() {
        return this.$store.getters.cartList.filter(res => {
          return res.isChecked
        }).length
      },
      isCheckedAll() {
        if(this.$store.state.cartList.length === 0) return false;
        // way 1
        // return !(this.$store.state.cartList.filter(res => !res.isChecked).length)
        // way 2
        return !this.list.find(res => !res.isChecked)
      }
    },
    methods: {
      btnClick() {
       if(this.isCheckedAll){
         this.list.forEach(item => item.isChecked = false)
       }else {
         this.list.forEach(item => item.isChecked = true)
       }
      },
      settle() {
        if(!this.isCheckedAll){
          this.$toast.show('请添加你选购的商品',2000)
        }
      }
    },
    filters: {
      showPrice(price){
        return price.toFixed(2)
      }
    }
  }
</script>

<style scoped>
  .bottom-bar {
    z-index: 998;
    position:relative;
    align-items: center;
    display: flex;
    height: 40px;
    background-color: #eee;
    /*justify-content: space-between;*/
  }
  .left-box {
    /*display: flex;*/
    /*align-items: center;*/
  }
  .left {
    display: flex;
    width: 60px;
    align-items: center;
  }
  .middle{
    padding-left: 20px;
    flex: 1;
  }
  .right {
    color: #f6f6f6;
    height: 40px;
    line-height: 40px;
    width: 80px;
    background-color: orangered;
  }
</style>