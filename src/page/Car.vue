<template lang="html">
  <div class="index">
    <p>car</p>
    <v-footer></v-footer>
  </div>
</template>

<script>
import Footer from "@/common/Footer.vue";

export default {
  data() {
    return {
      datas: ""
    };
  },
  components: {
    "v-footer": Footer
  }
};
</script>

<style lang="less" scoped>
</style>
