import Axios from "./axios"


export default {

  /**
 * 获取商品列表
 */
  async getGoodList() {
    let list = await Axios('post', '/goods_list')
    return list
  },

  /**
   * 获取轮播图
   */
  async getBrandList() {
    let list = await Axios('post', '/brand_list')
    return list
  },

  /**
   * 获取分类栏目列表
   */
  async getColumnList(){
    let list = await Axios('post', ' /column_list')
    return list
  }
 
}
