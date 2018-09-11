<template>
    <div class="categoryList">
        <h3 class="categoryTitle">文章列表：</h3>
      <div>
        <i-button type="primary" class="newCate" @click="newCateBtn">新增类目</i-button>
      </div>
      <Table border :columns="columns7" :data="data6"></Table>
      <Modal
        v-model="newCategory"
        title="新增类目"
        :loading="loading"
        @on-ok="asyncOK">
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
          <FormItem label="类目名称" prop="categoryName">
            <Input v-model="formValidate.categoryName"  placeholder="Enter something..."></Input>
          </FormItem>
        </Form>
      </Modal>
    </div>
</template>

<script>
export default {
  name: 'categroy-list',
  data () {
    return {
      columns7: [
        {
          title: '类目编号',
          key: 'id',
          width: 100
        },
        {
          title: '类目名称',
          key: 'categoryTitle'
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
                onClick = {() => { this.remove(params) }}>
                  删除 </i-button>
              </div>)
          }
        }
      ],
      data6: [
        {
          id: 1,
          categoryTitle: 18
        },
        {
          id: 2,
          categoryTitle: 24
        },
        {
          id: 3,
          categoryTitle: 30
        },
        {
          id: 4,
          categoryTitle: 26
        }
      ],
      newCategory: false,
      loading: true,
      formValidate: {
        categoryName: ''
      },
      ruleValidate: {
        categoryName: [
          {required: true, message: 'The name cannot be empty', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    /* show (params) {
      this.$router.push({name: 'article_edit', params: { id: params.row.id }})
    }, */
    remove (index) {
      this.data6.splice(index, 1)
    },
    asyncOK () {
      this.$refs.formValidate.validate((valid) => {
        if (valid) {
          this.loading = false
          this.newCategory = false
          this.$Message.success('Success!')
        } else {
          this.loading = true
          setTimeout(() => {
            this.loading = false
            this.newCategory = true
          }, 1000)
          this.$Message.error('Fail!')
        }
      })
    },
    newCateBtn () {
      this.newCategory = true
    }
  }
}
</script>

<style lang="less">
  .categoryList{
    .categoryTitle{
    margin-bottom: 10px;
  }
    .newCate{
      margin-bottom: 10px;
      text-align: right;
    }
  }
</style>
