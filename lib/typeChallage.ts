//實現ValueOf
type ValueOf<Object> = Object[keyof Object]

type stringAndAge = ValueOf<{ name: string; age: 20 }>
