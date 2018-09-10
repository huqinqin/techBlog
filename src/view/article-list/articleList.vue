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
          id: 1,
          articleTitle: 18,
          createtime: 'New York No. 1 Lake Park'
        },
        {
          id: 2,
          articleTitle: 24,
          createtime: 'London No. 1 Lake Park'
        },
        {
          id: 3,
          articleTitle: 30,
          createtime: 'Sydney No. 1 Lake Park'
        },
        {
          id: 4,
          articleTitle: 26,
          createtime: 'Ottawa No. 2 Lake Park'
        }
      ]
    }
  },
  methods: {
    show (params) {
      this.$router.push({name: 'article_edit', params: { id: params.row.id }})
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
