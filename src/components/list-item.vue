<template>
  <li class="list-item"
      tabindex="1"
      @click="toggleList">
  {{text}}    
  </li>
</template>

<script>
export default {
  name: 'list-item',
  props: {
    text: {
      type: String,
      default: ''
    }
  },
  methods: {
    toggleList(event) {
      console.log('event---', event.target.innerText)
    }
  }
}
</script>

<style lang="less" scoped>
.list-item {
  width: 100%;
  height: 40px;
  margin-bottom: 5px;
  line-height: 40px;
  border-radius: 4px;
  list-style: none;
  font-size: 16px;
  cursor: pointer;
  &:hover,
  &:active,
  &:focus {
    background: #38c9ff;
    & {
      outline:none;
    }
  }
}
</style>


