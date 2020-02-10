import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList: []
  },
  getters: {
    cartList(state) {
      return state.cartList
    },
    // totalPrice(state){
    //   let totalPrice = 0
    //   for(let item of state.cartList){
    //     totalPrice += item.realPrice
    //   }
    // }
  },
  mutations: {
    addCounter(state,payload) {
      payload.count += 1
    },
    addToCart(state,payload)  {
      payload.isChecked = true
      state.cartList.push(payload)
    }
    // addCart(state, payload) {
    //  let oldProduct = null
    //   //way one
    //   // for(let item of state.cartList){
    //   //   if(item.iid === payload.iid){
    //   //     oldProduct = item
    //   //   }
    //   // }
    //   // way two
    //   oldProduct = state.cartList.find( item => item.iid === payload.iid)
    //
    //   if(oldProduct){
    //     oldProduct.count += 1
    //   }else {
    //     payload.count = 1
    //     state.cartList.push(payload)
    //   }
    // }
  },
  actions: {
    addCart(context,payload) {
      return new Promise(((resolve, reject) => {
        let oldProduct = context.state.cartList.find( item => item.iid === payload.iid)
        if(oldProduct){
          context.commit('addCounter',oldProduct)
          resolve('商品数量+1')
        }else {
          payload.count = 1
          context.commit('addToCart',payload)
          resolve('添加了新的商品')
        }
      }))

    }
  },
  modules: {
  }
})
