<template lang="html">
  <div class="index">
    <v-header></v-header>
    <v-swiper :swiper='datas.swiper'></v-swiper>
    <v-service></v-service>
    <v-footer></v-footer>
  </div>
</template>

<script>
import Index from "@/http/mock.js";
import Header from "@/components/index/Header.vue";
import Swiper from "@/components/index/Swiper.vue";
import Service from "@/components/index/Service.vue";
import Footer from "@/common/Footer.vue";

export default {
  data() {
    return {
      datas: ""
    };
  },
  components: {
    "v-header": Header,
    "v-swiper": Swiper,
    "v-service": Service,
    "v-footer": Footer
  },
  beforeCreate() {
    this.$api({ method: "post", url: "/index" })
      .then(response => {
        this.datas = response.data;
      })
      .catch(function(error) {
        alert(error);
      });
  }
};
</script>

<style lang="less" scoped>
</style>
