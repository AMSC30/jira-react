import { EffectCallback, useEffect } from 'react'

export default (fn: EffectCallback) => {
    useEffect(fn, [])
}
