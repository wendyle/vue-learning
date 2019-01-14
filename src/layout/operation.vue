<template>
  <div class="main">
    <div class="header">
      <top-header></top-header>
    </div>
    <div class="body">
      <div class="left"></div>
      <div class="right">
        <div class="operation">
          <div class="canvas"></div>
          <div class="attr"></div>
        </div>
        <div class="stream"></div>
      </div>
    </div>
    <stream-list></stream-list>
  </div>
</template>

<script>
import StreamList from './stream-list'
import TopHeader from '@/views/top-header'
export default {
  components: { StreamList, TopHeader }
}
</script>


<style lang="less" scoped>
.main {
  width: 1920px;
  height: 1080px;
  display: flex;
  flex-direction: column;
  
  .header{
    flex-grow: 2;
  }
  .body {
    flex-grow: 15;
    display: flex;
    flex-direction: row;
    .left {
      flex-grow: 2;
    }
    .right {
      flex-grow: 8;
      display: flex;
      flex-direction: column;
      .operation {
        flex-grow: 15;
        display: flex;
        .canvas {
          flex-grow: 4;
        }
        .attr {
          flex: 1;
        }
      }
      .stream {
        flex-grow: 1;
      }
    }
  }
}
</style>
