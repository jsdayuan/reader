
function curry(fn, len = fn.length) {
  return (function curried(iterArgs) {
    return function (...args) {
      let Args = [...iterArgs, ...args]
      if (Args.length >= len) return fn(...Args)
      return curried(Args)
    }
  })([])
}

function unboundMethod(methodName, len) {
  return curry(
    function (...args) {
      let obj = args.pop()
      return obj[methodName](...args)
    },
    len
  )
}

function compose(...fns) {
  let [fn1, fn2, ...rest] = fns.reverse()
  function composed(...args) {
    return fn2(fn1(...args))
  }
  if (!rest.length) return composed
  return compose(...rest.reverse(), composed)
}

function boundMathMethod(methodName) {
  return function (arr) {
    return Math[methodName](...arr)
  }
}

function prop(label, obj) {
  return obj[label]
}

function reverseArgs(fn) {
  return curry((...args) => {
    return fn(...args.reverse())
  }, fn.length)
}

function partial(fn,...prevArgs){
  return function (...lastArgs){
    return fn(...prevArgs,...lastArgs)
  }
}

let events = {
  curry,
  unboundMethod,
  compose,
  boundMathMethod,
  reduce: unboundMethod('reduce', 3),
  map: unboundMethod('map', 2),
  forEach: unboundMethod('forEach', 2),
  prop,
  reverseArgs,
  partial
}
export default helpers(events)

function helpers(events) {
  return events
};
