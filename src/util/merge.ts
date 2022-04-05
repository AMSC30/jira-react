import { isObj } from './type-judge'

interface IObj {
    [prop: string]: any
}

export const mergeObj = (source: IObj, target: IObj) => {
    const result: IObj = Object.create({})

    // 覆盖
    for (const key in target) {
        if (source[key] === undefined) {
            result[key] = target[key]
        }
        if (isObj(source[key]) && isObj(target[key])) {
            result[key] = mergeObj(source[key] as IObj, target[key] as IObj)
        }
        result[key] = target[key]
    }

    // 保留原有
    for (const key in source) {
        if (target[key] === undefined) {
            result[key] = source[key]
        }
    }
    return result
}
