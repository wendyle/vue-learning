<template>
  <div class="list-history">
    <table class="history-area">
      <tr class="history-title">
        <td class="title-item"
            v-for="(item,index) in titles"
            :key="index">
          {{ item }}</td>
      </tr>
      <tr class="history-file"
          v-for="(file,fileIndex) in files"
          :key="fileIndex">
        <td class="file-name">{{file.name}}</td>
        <td class="last-modified">{{file.lastModified}}</td>
      </tr>
    </table>
    <div class="clear-history">清空历史</div>
  </div> 
</template>

<script>
export default {
  name: 'list-history',
  data() {
    return {
      titles: ['文件名', '最后编辑'],
      files: [
        { name: '北京腾龙idc算子分析北京腾龙idc算子分析', lastModified: '12/22 12:34' },
        { name: '北京腾龙idc算子分析', lastModified: '12/22 12:34' },
        { name: '北京腾龙idc算子分析', lastModified: '12/22 12:34' },
        { name: '北京腾龙idc算子分析', lastModified: '12/22 12:34' },
        { name: '北京腾龙idc算子分析', lastModified: '12/22 12:34' }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.list-history {
  width:100%;
  padding:10px;
  font-size:16px;
  .history-area{
    float:left;
    width:90%;
    .history-title{
      margin-bottom: 20px;
      .title-item{
        min-width: 0;
      }
    }
    .history-file {
      margin-bottom: 20px;
      font-size: 16px;
      .file-name{}
      .last-modified{}
    }
  }
  .clear-history{
    float:right;
    color:blue;
    cursor: pointer;
  }
}
</style>


