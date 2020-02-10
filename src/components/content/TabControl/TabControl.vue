<template>
  <div class="control">
    <div v-for="(item,index) in titles" class="control-item" @click="itemClick(index)" :class="{active:index === currentIndex}">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props: {
      titles: {
        type: Array,
        default() {
          return []
        }
      },
      goods: {

      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index
        this.$emit('tabClick',index)
      }
    }
  }
</script>

<style scoped>
  .control {
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
    /*justify-content: center;*/
    text-align: center;
    background: #fff;
    /*margin-bottom: 5px;*/
  }
  .control-item {
    flex: 1;
  }
  .active span {
    border-bottom: 3px solid var(--color-tint);
    padding-bottom: 10px;
  }
  .active{
    color: var(--color-tint);
  }
</style>