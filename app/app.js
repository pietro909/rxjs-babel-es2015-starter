import Rx from 'rx'

Rx.Observable.from([1, 2, 3, 4, 5])
  .map((item) => {
    return item + 1
  })
  .subscribe((x) => {
    console.log('x: ', x)
  })
