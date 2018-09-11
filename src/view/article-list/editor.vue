<template>
  <div>
    <editor ref="editor" :value="content" @on-change="handleChange"/>
    <!--<button @click="changeContent">修改编辑器内容</button>-->
  </div>
</template>

<script>
import Editor from '_c/editor'
export default {
  name: 'editor_page',
  components: {
    Editor
  },
  data () {
    return {
      content: ''
    }
  },
  methods: {
    handleChange (html, text) {
      this.$emit('editArticle', html)
    },
    changeContent () {
      this.$refs.editor.setHtml('<p>powered by wangeditor</p>')
    }
  }
}
</script>

<style>

</style>
