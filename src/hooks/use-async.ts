import { useState } from 'react'

interface IState<T> {
    status: 'idle' | 'loading' | 'success' | 'error'
    error: null | Error
    data: null | T
}

const defaultState: IState<null> = {
    status: 'idle',
    error: null,
    data: null
}
export const useAsync = <T>(initialState?: IState<T>) => {
    const [state, setState] = useState<IState<T>>({
        ...defaultState,
        ...initialState
    })
    const setData = (data: T) =>
        setState({
            data,
            status: 'success',
            error: null
        })

    const setError = (error: Error) =>
        setState({
            status: 'error',
            data: null,
            error
        })

    const run = (promise: Promise<T>) => {
        // 非操作符优先级比instanceof高
        if (!(promise instanceof Promise)) {
            return Promise.reject(new Error('run 方法传入的不是一个promise'))
        }
        setState({ ...state, status: 'loading' })
        return promise
            .then(data => {
                setData(data)
                return data
            })
            .catch(e => {
                setError(e)
                throw e
            })
    }
    return {
        ...state,
        setData,
        setError,
        run,
        isIdle: state.status === 'idle',
        isLoading: state.status === 'loading',
        isError: state.status === 'error',
        isSuccess: (state.status = 'success')
    }
}
