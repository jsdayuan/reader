import Api from "../Api"
import { GET_GOOD_LIST, GET_BRAND_LIST, GET_COLUMN_LIST } from "../action_type"

export const getGoodList = () => {
  return async dispatch => {
    let goodList = await Api.getGoodList()
    dispatch({
      type: GET_GOOD_LIST,
      goodList
    })
  }
}

export const getBrandList = () => {
  return async dispatch => {
    let BrandList = await Api.getBrandList()
    dispatch({
      type: GET_BRAND_LIST,
      BrandList
    })
  }
}

export const geColumnList = () => {
  return async dispatch => {
    let ColumnList = await Api.getColumnList()
    dispatch({
      type: GET_COLUMN_LIST,
      ColumnList
    })
  }
}