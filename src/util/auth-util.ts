import { httpPost } from './http'

const TOKEN_KEY: string = '__token__'

interface IUser {
    username: string
    password: string
    token?: string
}

const setToken = (user: IUser) => {
    localStorage.setItem(TOKEN_KEY, user.token || '')
}

const getToken = () => localStorage.getItem(TOKEN_KEY)

const login = (user: IUser) => {
    return httpPost('/login', user).then(res => {
        setToken(res as IUser)
        return res as IUser
    })
}
const register = (user: IUser) => {
    return httpPost('/register', user).then(res => {
        setToken(res as IUser)
        return res as IUser
    })
}
const logout = async () => {
    localStorage.removeItem(TOKEN_KEY)
}
export { login, register, logout, getToken }
