import { GET_GOOD_LIST, GET_BRAND_LIST, GET_COLUMN_LIST } from "../action_type"

let state = {
  goodList: [],
  BrandList: [],
  ColumnList: []
}

export default function Home(newState = state, action) {
  switch (action.type) {
    case GET_GOOD_LIST:
      return {
        ...newState,
        goodList: action.goodList
      }
    case GET_BRAND_LIST:
      return {
        ...newState,
        BrandList: action.BrandList
      }
    case GET_COLUMN_LIST:
      return {
        ...newState,
        ColumnList: action.ColumnList
      }

    default:
      return newState
  }
}
