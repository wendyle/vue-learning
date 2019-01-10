<template>
  <div class="list-title">
    <search></search>
    <div class="label">打开算子流</div>
    <close></close>
  </div>
</template>

<script>
import search from '../components/search'
import close from '../components/close'
export default {
  name: 'list-label',
  components: { search, close }
}
</script>

<style lang="less" scoped>
.list-title{
  position: relative;
  height: 50px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid red;
  .label{
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    font-size:16px;
  }
}
</style>


