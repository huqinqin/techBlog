<template>
    <div class="articleList">
      <h3 class="articleTitle">文章列表：</h3>
      <Table border :columns="columns7" :data="data6"></Table>
    </div>
</template>

<script>
export default {
  name: 'articleList',
  data () {
    return {
      columns7: [
        {
          title: '文章编号',
          key: 'id',
          width: 100
        },
        {
          title: '文章标题',
          key: 'articleTitle'
        },
        {
          title: '发表时间',
          key: 'createtime'
        },
        {
          title: '操作',
          key: 'action',
          width: 150,
          align: 'center',
          render: (h, params) => {
            return (
              <div><i-button
                type = "primary"
                onClick = { () => { this.show(params) }
                }>
                编辑 </i-button>
              <i-button
                type = "primary"
                onClick = {() => { this.remove(params) }}>
                  删除 </i-button>
              </div>)
          }
        }
      ],
      data6: [
        {
          id: 'John Brown',
          articleTitle: 18,
          createtime: 'New York No. 1 Lake Park'
        },
        {
          id: 'Jim Green',
          articleTitle: 24,
          createtime: 'London No. 1 Lake Park'
        },
        {
          id: 'Joe Black',
          articleTitle: 30,
          createtime: 'Sydney No. 1 Lake Park'
        },
        {
          id: 'Jon Snow',
          articleTitle: 26,
          createtime: 'Ottawa No. 2 Lake Park'
        }
      ]
    }
  },
  methods: {
    show (index) {
      this.$Modal.info({
        title: 'User Info',
        content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`
      })
    },
    remove (index) {
      this.data6.splice(index, 1)
    }
  }
}
</script>

<style lang="less">
   .articleList{
     .articleTitle{
       margin-bottom: 10px;
     }
   }
</style>
