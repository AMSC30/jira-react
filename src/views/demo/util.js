import qs from 'qs'

const isValidate = val => (val === 0 ? true : !!val)
export const normalizeQuery = obj => {
    const result = {}
    for (const key in obj) {
        if (isValidate(obj[key])) {
            result[key] = obj[key]
        }
    }
    return qs.stringify(result)
}
export const debounce = (fn, delay) => {
    let timer = null

    return (...rest) => {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => fn(...rest), delay)
    }
}
