export const proportion = ({ x1, y1, x2, y2 }: { x1?: number, y1?: number, x2?: number, y2?: number }) =>
  (x1 === undefined && y1 !== undefined && x2 !== undefined && y2 !== undefined) ? y1 * x2 / y2 :
  (x1 !== undefined && y1 !== undefined && x2 === undefined && y2 !== undefined) ? x1 * y2 / y1 :
  (x1 !== undefined && y1 === undefined && x2 !== undefined && y2 !== undefined) ? x1 * y2 / x2 : 
  (x1 !== undefined && y1 !== undefined && x2 !== undefined && y2 === undefined) ? y1 * x2 / x1 :
  undefined

export const fitRectDimensions = (src: SizeType, dst: SizeType): SizeType => {
  const scaleRatio = Math.min(dst.width / src.width, dst.height / src.height)
  const result = {
    width: src.width * scaleRatio,
    height: src.height * scaleRatio,
  }
  return result
}

export function pipe <T1, R>(args: T1, fn1: (x: T1) => R) : R
export function pipe <T1, T2, R>(args: T1, fn1: (x: T1) => T2, fn2: (x: T2) => R) : R
export function pipe <T1, T2, T3, R>(args: T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => R) : R
export function pipe <T1, T2, T3, T4, R>(args: T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => R) : R
export function pipe (args: any, ...fns: any[]) { 
  return fns.splice(1, fns.length).reduce((res,fn) => fn(res), fns[0](args))
}

export const throttle = <T extends Function>(fn: T, miliseconds: number): T => {
  let calling = false
  let lastArgs: any = undefined
  const throttleFn: any = (...args: any[]) => {
    lastArgs = args
    if (calling) return
    calling = true
    setTimeout(() => { 
      fn(...lastArgs)
      calling = false
    }, miliseconds)
  }
  return throttleFn;
}