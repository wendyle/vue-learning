<template>
  <div class="search">
    <input class="search-keyword" 
           type="text" 
           :placeholder="placeholder">
    <div class="search-button">
      <img class="search-icon" :src="iconSrc">
    </div>
  </div>
</template>

<script>
export default {
  name: 'search',
  props: {
    placeholder: {
      type: String,
      default: '请输入关键词'
    }
  },
  data() {
    return {
      iconSrc: '../../static/img/search.png'
    }
  }
}
</script>

<style lang="less" scoped>
.search {
  display:flex;
  background: #88888817;
  .search-keyword{
    width: 150px;
    height:30px;
    font-size:16px;
  }
  .search-button{
    background: #88888817;
    line-height: 30px;
    text-align: center;
    width: 30px;
    .search-icon{
      vertical-align: middle;
    }
  }
}
</style>


