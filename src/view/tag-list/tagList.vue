<template>
    <div class="tagList">
      <h3>标签管理:</h3>
      <ul>
        <li v-for="(item) in tagList" :key="item.value" :value="item.value">
          <Tag v-if="show" closable @on-close="handleClose" color="primary">{{item.label}}</Tag>
        </li>
        <div class="newtags"><i-button @click="newTag" type="primary">新增标签</i-button></div>
      </ul>
      <Modal
        v-model="newTagList"
        title="新增标签"
        :loading="loading"
        @on-cancel="cancle"
        @on-ok="asyncOK">
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
          <FormItem label="标签名称" prop="tagsName">
            <Input v-model="formValidate.tagsName"  placeholder="Enter something..."></Input>
          </FormItem>
        </Form>
      </Modal>
    </div>
</template>

<script>
export default {
  name: 'tagList',
  data () {
    return {
      show: true,
      newTagList: false,
      loading: true,
      tagList: [{
        value: '情感',
        label: '情感'
      }, {
        value: '生活',
        label: '生活'
      }, {
        value: '技术',
        label: '技术'
      }],
      formValidate: {
        tagsName: ''
      },
      ruleValidate: {
        tagsName: [
          {required: true, message: 'The name cannot be empty', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    handleClose () {
      this.show = false
    },
    asyncOK () {
      this.$refs.formValidate.validate((valid) => {
        if (valid) {
          this.loading = false
          this.newTagList = false
        } else {
          this.loading = true
          setTimeout(() => {
            this.loading = false
          }, 1000)
        }
      })
    },
    newTag () {
      this.$refs.formValidate.resetFields()
      this.newTagList = true
    },
    cancle () {
      this.$refs.formValidate.resetFields()
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
      position: relative;
      padding: 10px;
      box-sizing: border-box;
      width: 100%;
      min-height: 400px;
      border: 1px solid #eee;
      box-shadow: 0 0 7px 1px #bbb;
      display: flex;
      li{
      }
      .newtags{
        position: absolute;
        bottom: 10px;
        right: 40%;
      }
    }
  }
</style>
