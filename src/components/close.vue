<template>
  <div class="close">
    <img class="close-icon" :src="iconSrc">
  </div>
</template>

<script>
export default {
  name: 'close',
  data() {
    return {
      iconSrc: '../../static/img/icon_close.png'
    }
  }
}
</script>

