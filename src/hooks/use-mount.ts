import { EffectCallback, useEffect } from 'react'

export default (fn: EffectCallback) => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(fn, [])
}
