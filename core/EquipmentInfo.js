import { Dimensions } from "react-native"

let _window = Dimensions.get('window')

export const EqSize = {
  width: _window.width,
  height: _window.height
}