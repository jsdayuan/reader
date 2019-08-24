import axios from "axios"
import { baseURL } from "../utils/baseURL"
import { Alert } from "react-native";
import _ from "../utils"

function ajax(method, url, p = {}, otherOption = {}) {
  let params = method === 'get' ? p : {}
  let data = method === 'post' ? p : {}
  return new Promise(resolve => {
    let options = {
      url,
      method,
      baseURL,
      headers: {
        'Content-Type': "application/x-www-form-urlencoded"
      },
      params,
      data,
      timeout: 15000,
      withCredentials: true,
      ...otherOption
    }
    console.log(options, 'options')
    axios.request(options).then(res => {
      let reverseProp = _.reverseArgs(_.prop)(res.data)
      let code = reverseProp('code')
      let data = reverseProp('data')
      let message = reverseProp('message')
      if (!code) {
        Alert.alert(
          '提醒',
          message
        )
      } else {
        resolve(data)
      }

    }).catch(err => {
      console.error(err, 'err')
      Alert.alert(
        '提醒',
        '网络出错，请重试'
      )
      resolve(false)
    })
  })

}
export default ajax