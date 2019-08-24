import Reducer from "../reducer"
import { createStore,applyMiddleware } from "redux"

import thunk from 'redux-thunk'
import logger from 'redux-logger'

export default () => {
  let store = createStore(Reducer,applyMiddleware(thunk,logger))
  return store
}