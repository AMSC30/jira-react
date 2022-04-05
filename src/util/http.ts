import { merge } from 'webpack-merge'
import qs from 'qs'
import { getToken } from './auth-util'
interface IGetData {
    [prop: string]: string | number
}

type IPostData = BodyInit | null | object

const baseURL: string = process.env.REACT_APP_API_URL as string

const http = (url: string, config: RequestInit) => {
    const token = getToken()
    const baseConfig: RequestInit = {
        headers: {
            Authorization: `Bearer ${token === null ? '' : token}`
        }
    }
    return window.fetch(`${baseURL}/${url}`, merge(baseConfig, config)).then(res => {
        if (res.status === 401) {
            // 未登录
            return Promise.reject(new Error('未登录'))
        }
        if (res.ok) {
            return res.json()
        } else {
            return Promise.reject(res.json())
        }
    })
}

const httpGet = (url: string, data: IGetData | null, config: RequestInit = {}) => {
    if (data === undefined) {
        return Promise.reject(new Error('post request need data'))
    }
    config = merge(
        {
            method: 'GET',
            headers: {}
        },
        config
    )
    if (data) {
        url += `?${qs.stringify(data)}`
    }
    return http(url, config)
}

const httpPost = (url: string, data: IPostData, config: RequestInit = {}) => {
    if (data === undefined) {
        return Promise.reject(new Error('post request need data'))
    }

    config = merge(
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data || {})
        },
        config
    )

    return http(url, config)
}

export { http, httpGet, httpPost }
