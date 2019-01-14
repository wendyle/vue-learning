<template>
  <div class="top-header">
    <div class="logo-grp">
      <img src="../../static/img/toolbar/znv_logo.png">   
      <img class="arrow-down" v-if="rotate==true" @click="turnArround" src='../../static/img/arrow_up.png' >
      <img class="arrow-down" v-if="rotate==false" @click="turnArround" src='../../static/img/arrow_down.png'> 
    </div>
    <div class="img-grp">
      <img-button  v-for="item in doLists" :src="item" :key="item"></img-button>
      <img-button  v-for="item in selectLists" :src="item" :key="item"></img-button>
      <scaling :text="percent"></scaling>
    </div>
  </div>
</template>

<script>
import ImgButton from '../components/img-button'
import Scaling from '../components/scaling'
export default {
  name: 'top-header',
  components: {
    ImgButton,
    Scaling
  },
  data() {
    return {
      percent: '20%',
      rotate: false,
      doLists: [
        '../../static/img/toolbar/tools_back.png',
        '../../static/img/toolbar/tools_reset.png'
      ],
      selectLists: [
        '../../static/img/toolbar/tools_selectall.png',
        '../../static/img/toolbar/tools_empty.png'
      ],
      scalingLists: [
        '../../static/img/toolbar/tools_big.png',
        '../../static/img/search.png',
        '../../static/img/toolbar/tools_small.png'
      ]
    }
  },
  methods: {
    turnArround() {
      this.rotate = !this.rotate
      console.info(this.rotate)
    }
  }
}
</script>

<style lang="less" scoped>
.top-header{
  position: relative;
  background:	#696969;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo-grp{
    margin-left: 20px;
    display: flex;
    align-items: center;
    .aa{
     background-image: '../../static/img/arrow_down.png' 
    } 
    .bb{
     background-image: '../../static/img/toolbar/tools_small.png' 
    }  
    .arrow-down{
      width:20px;
      height:20px;
    }
  }
  .img-grp{
    display:flex;
    justify-content: space-between;
  }
}
</style>


