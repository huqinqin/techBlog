import axios from 'axios'
export default {
  getList (params) {
    return axios.post('base/setting/promo/list', params)
  }
}
