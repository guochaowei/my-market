<template lang="html">
<ul class='service'>
  <li><i class="icon-ok"></i><span>自营品牌</span></li>
  <li><i class="icon-ok"></i><span>无忧退货</span></li>
  <li><i class="icon-ok"></i><span>48小时极速退款</span></li>
</ul>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="less" scoped>
@import "../../assets/style/style.css";
@import "../../assets/style/fz.less";
  .service {
    display: flex;
    justify-content:space-around;
    li {
      text-align: center;
      padding:4vw 0;
      display: flex;
      align-items: center;
      span {
          .fz(font-size,28);
          padding-left: 1vw;
        }
      i {
          .fz(font-size,36);
        }
    }
  }
</style>
