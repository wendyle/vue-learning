<template>
  <div class="list-footer">
    <list-button
      class="list-footer-button"
      v-for="(item,index) in buttonInfos"
      :key="index"
      :text="item.text"
      :bgcolor="item.bgcolor"
      :color="item.color">
    </list-button>
  </div>
</template>

<script>
import ListButton from '../components/button'
export default {
  name: 'list-footer',
  components: { ListButton },
  data() {
    return {
      buttonInfos: [
        { text: '打开',
          bgcolor: '#108ee9',
          color: '#ffffff'
        },
        {
          text: '取消',
          bgcolor: '#ffffff',
          color: '#000000'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.list-footer {
  padding:10px 20px;
  border-top:1px solid grey;
  display:flex;
  justify-content: flex-end;
  .list-footer-button {
    margin-right: 20px;
  }
}
</style>

