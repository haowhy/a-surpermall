<template>
  <div class="check-button" :class="{check:isChecked}" @click="btnClick">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
  export default {
    name: "CheckButton",
    props:{
      isChecked: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      btnClick() {
        this.$emit('btnClick')
      }
    }
  }
</script>

<style scoped>
  .check-button {
    border-radius: 50%;
    border: 2px solid #ccc;
  }
  .check {
    background-color: red;
    border-color: red;
  }
</style>