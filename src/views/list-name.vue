<template>
  <ul class="list-name">
    <list-item
      v-for="(item,index) in names"
      :key="index"
      :text="item">
    </list-item>
  </ul>
</template>

<script>
import ListItem from '../components/list-item'
export default {
  name: 'list-name',
  components: { ListItem },
  data() {
    return {
      names: ['新建算子流', '最近打开', '我的算子流', '行业模板算子流']
    }
  }
}
</script>

<style lang="less" scoped>
.list-name {
  width: 20%;
  height: 692px;
  padding: 10px 15px;
  border-right: 1px solid #000000;
}
</style>


