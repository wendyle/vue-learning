<template>
  <div class="scaling">
    <img-button :src="smallSrc"></img-button>
    <div style="width:40px;height:40px;">
      <img src="../../static/img/search.png">
      <span class="percent">{{text}}</span>
    </div>
    <img-button :src="bigSrc"></img-button>
  </div>
</template>

<script>
import ImgButton from '../components/img-button'
export default {
  name: 'scaling',
  components: { ImgButton },
  props: {
    text: {
      type: String,
      default: '0%'
    }
  },
  data() {
    return {
      smallSrc: '../../static/img/toolbar/tools_small.png',
      bigSrc: '../../static/img/toolbar/tools_big.png'
    }
  }
}
</script>

<style lang="less" scoped>
.scaling{
  display:flex;
  .percent{
    color:black;
  }
}
</style>


