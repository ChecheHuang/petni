type AnyObject = Record<string | number, any>
type OverRide<T, K> = Omit<T, keyof K> & K
type CreateDocumentOptions<T, K extends keyof T> = Omit<T, K> &
  Partial<Pick<T, K>>
type Callback = () => void
type Nullable<T> = T | null

type AsyncFnReturnType<T> = Awaited<ReturnType<T>>
type GetArrType<T> = T extends (infer U)[] ? U : never
