
export function RouterTo(self) {
  return function (page, params) {
    return self['props'].navigation.navigate(page, params)
  }
}