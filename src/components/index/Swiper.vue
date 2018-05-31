<template lang="html">
  <mt-swipe :auto="4000" v-if='swiper'>
    <mt-swipe-item v-for="image in swiper" :key="image.id">
      <img :src=image.imgPath>
    </mt-swipe-item>
  </mt-swipe>
</template>

<script>
export default {
  props: ['swiper'],
}
</script>

<style lang="less" scoped>
  .mint-swipe {
    width: 100%;
    height:62vw;
    a,img {
      display: block;
      width: 100%;
      height:100%;
    }
  }
</style>
