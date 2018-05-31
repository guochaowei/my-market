<template lang="html">
  <footer @click.stop="gotoRouter()">
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="Index">
        <i slot="icon" class="icon-index"></i>
        主页
      </mt-tab-item>
      <mt-tab-item id="Category">
        <i slot="icon" class="icon-category"></i>
        分类
      </mt-tab-item>
      <mt-tab-item id="Car">
        <i slot="icon" class="icon-car"></i>
        购物车
      </mt-tab-item>
      <mt-tab-item id="User">
        <i slot="icon" class="icon-user"></i>
        我的
      </mt-tab-item>
    </mt-tabbar>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      selected: ""
    };
  },
  methods: {
    gotoRouter() {
      this.$router.push({ name: this.selected });
    }
  }
};
</script>

<style lang="less" scoped>
@import "../assets/style/style.css";
</style>
