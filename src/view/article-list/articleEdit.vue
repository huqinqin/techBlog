<template>
    <div class="articleEdit">
      <h3>文章编辑:</h3>
      <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
        <FormItem label="文章标题" prop="name">
          <Input v-model="formValidate.name" placeholder="Enter your article title"></Input>
        </FormItem>
        <FormItem label="文章内容" prop="content">
          <editor @editArticle = 'editArticle'></editor>
        </FormItem>
        <FormItem label="所属类目" prop="category">
          <Select v-model="formValidate.category" placeholder="Select your category">
            <Option  v-for="(item, index) in formValidate.categoryList" :key="index" :value="item.value">{{item.label}}</Option>
          </Select>
        </FormItem>
        <FormItem label="创建时间">
          <Row>
            <Col span="11">
              <FormItem prop="date">
                <DatePicker type="date" placeholder="Select date" v-model="formValidate.date"></DatePicker>
              </FormItem>
            </Col>
            <Col span="2" style="text-align: center">-</Col>
            <Col span="11">
              <FormItem prop="time">
                <TimePicker type="time" placeholder="Select time" v-model="formValidate.time"></TimePicker>
              </FormItem>
            </Col>
          </Row>
        </FormItem>
        <FormItem label="文章作者" prop="desc">
          <Input v-model="formValidate.desc"  placeholder="Enter something..."></Input>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handleSubmit('formValidate')">Submit</Button>
          <Button @click="handleReset('formValidate')" style="margin-left: 8px">Reset</Button>
        </FormItem>
      </Form>
    </div>
</template>

<script>
import editor from '@/view/article-list/editor.vue'
export default {
  name: 'articleEdit',
  data () {
    return {
      formValidate: {
        name: '',
        content: '',
        category: '',
        date: '',
        time: '',
        desc: '',
        categoryList: [{
          label: '生活',
          value: '1'
        }, {
          label: 'web前端技术',
          value: '2'
        }, {
          label: 'php技术',
          value: '3'
        }]
      },
      ruleValidate: {
        name: [
          {required: true, message: 'The name cannot be empty', trigger: 'blur'}
        ],
        content: [
          {required: true, message: 'Mailbox cannot be empty', trigger: 'blur'}
        ],
        category: [
          {required: true, message: 'Please select the category', trigger: 'change'}
        ],
        date: [
          {required: true, type: 'date', message: 'Please select the date', trigger: 'change'}
        ],
        time: [
          {required: true, type: 'string', message: 'Please select time', trigger: 'change'}
        ],
        desc: [
          {required: true, message: 'Please enter a personal introduction', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('Success!')
        } else {
          this.$Message.error('Fail!')
        }
      })
    },
    handleReset (name) {
      this.$refs[name].resetFields()
    },
    editArticle (txt) {
      this.formValidate.content = txt
      console.log(this.formValidate.content)
    }
  },
  components: {
    editor
  }
}
</script>

<style scoped>

</style>
