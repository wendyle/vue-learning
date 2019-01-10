<template>
  <div class="button"
       :style="{background:bgcolor, color:color}"
  >{{text}}</div>
</template>

<script>
export default {
  name: 'znv-button',
  props: {
    text: {
      type: String,
      default: 'button'
    },
    bgcolor: {
      type: String,
      default: '#ffffff'
    },
    color: {
      type: String,
      default: '#ffffff'
    }
  }
}
</script>

<style lang="less" scoped>
.button{
  height:35px;
  width:70px;
  text-align:center;
  line-height:35px;
  font-size:16px;
  border:0.5px solid #000000;
  border-radius:5%;
}
</style>


