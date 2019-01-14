<template>
  <img class="img-button"
    :src="imgSrc"
    @click="handleClick">
</template>

<script>
export default {
  name: 'img-button',
  props: {
    imgSrc: {
      type: String,
      default: '../../static/img/toolbar/tools_back.png'
    }
  },
  methods: {
    handleClick(event) {
      console.log('event---', event.target.innerText)
    }
  }
}
</script>

<style lang="less" scoped>
.img-button{
  width:40px;
  height:40px;
  margin-right: 20px;
}
</style>



