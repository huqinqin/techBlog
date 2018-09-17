// Vue.use(plugin),其中plugin是一个Vue的对象，定义plugin函数可以是一个对象包含install函数，另一种是plugin可以直接是一个函数
const plugin1 = {
  install (Vue) {
    const context = require.context('./http', false, /\.js$/)
    console.log(context.keys())
    context.keys().forEach((keys) => {
      if (keys !== './index.js') {
        const name = keys.match(/([0-9A_Za-z]*)\.js$/i)[1]
        Vue[`$${name}`] = Vue.prototype[`$${name}`] = context(keys).default
      }
    })
  }
}
function Plugin2 (a, b, c) {
  console.log('Plugin2 第一个参数:', a)
  console.log('Plugin2 第二个参数:', b)
  console.log('Plugin2 第三个参数:', c)
}
export {plugin1, Plugin2}
