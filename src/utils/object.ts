export const pick = <T, K extends keyof T>(obj: T, ...props: K[]): { [P in K]: T[P] } => {
  return <any>props.reduce((result: any, prop) => {
    if (prop in obj) result[prop] = obj[prop]
    return result
  }, {})
}

export function path<T, K extends keyof T>(obj: T, prop1: K): T[K]
export function path<T, K1 extends keyof T, K2 extends keyof T[K1]>(obj: T, prop1: K1, prop2: K2): T[K1][K2]
export function path<T, K1 extends keyof T, K2 extends keyof T[K1], K3 extends keyof T[K1][K2]>(obj: T, prop1: K1, prop2: K2, props3: K3): T[K1][K2][K3]
export function path<T, K1 extends keyof T, K2 extends keyof T[K1], K3 extends keyof T[K1][K2], K4 extends keyof T[K1][K2][K3]>(obj: T, prop1: K1, prop2: K2, props3: K3, props: K4): T[K1][K2][K3][K4]
export function path(obj: any, ...props: string[]): any {
  const [prop, ...rest] = props
  if (obj == null || !(prop in obj)) return undefined
  else if (rest.length === 0) return obj[prop]
  else return (<any>path)(obj[prop], ...rest)
}