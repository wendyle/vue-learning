<template>
  <div class="stream">
    <list-label></list-label>
    <div class="content">
      <list-name></list-name>
      <list-history></list-history>
    </div>
    <list-footer></list-footer>
  </div>
</template>

<script>
import ListLabel from '../views/list-label'
import ListName from '../views/list-name'
import ListHistory from '../views/list-history'
import ListFooter from '../views/list-footer'

export default {
  name: 'stream-list',
  components: { ListFooter, ListLabel, ListName, ListHistory }
}
</script>

<style lang="less" scoped>
.stream{
  width:1000px;
  height:800px;
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index:999;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  border: 1px solid red;
  .content {
    flex-grow: 10;
    display: flex;
  }
}
</style>


