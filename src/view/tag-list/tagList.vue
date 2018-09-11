<template>
    <div class="tagList">
      <h3>标签管理:</h3>
      <ul>
        <li v-for="(item) in tagList" :key="item.value" :value="item.value">
          <Tag v-if="show" closable @on-close="handleClose" color="primary">{{item.label}}</Tag>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'tagList',
  data () {
    return {
      show: true,
      tagList: [{
        value: '情感',
        label: '情感'
      }, {
        value: '生活',
        label: '生活'
      }, {
        value: '技术',
        label: '技术'
      }]
    }
  },
  methods: {
    handleClose () {
      this.show = false
    }
  }
}
</script>

<style lang="less">
  .tagList{
    h3{
      margin-bottom: 10px;
    }
    ul{
      padding: 10px;
      box-sizing: border-box;
      width: 100%;
      min-height: 400px;
      border: 1px solid #eee;
      box-shadow: 0 0 7px 1px #bbb;
      display: flex;
      li{
      }
    }
  }
</style>
