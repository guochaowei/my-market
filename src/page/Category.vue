<template lang="html">
  <div class="wrap">
    <v-header name="商品分类"></v-header>
    <section class="view">
      <v-aside :datas="datas.aside"></v-aside>
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
import Category from "@/http/mock.js";
import Header from "@/common/Header.vue";
import Aside from "@/components/category/Aside.vue";

export default {
  data() {
    return {
      datas: ""
    };
  },
  components: {
    "v-header": Header,
    "v-aside": Aside
  },
  created() {
    this.$api({ method: "post", url: "/category" })
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
.wrap{
  width: 100%;
  height: 100%;
  .view {
    width: 100%;
    height:100%;
    display: flex;
  }
}
</style>
