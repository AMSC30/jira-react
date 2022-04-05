import { createContext, ReactNode, useContext, useState } from 'react'
import * as authUtil from 'util/auth-util'

interface IUser {
    username: string
    password: string
}

interface IContext {
    user: IUser | null
    login: (form: IUser) => Promise<void>
    register: (form: IUser) => Promise<void>
    logout: () => Promise<void>
}

const AuthContext = createContext<IContext | undefined>(undefined)
AuthContext.displayName = 'AuthContext'

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<IUser | null>(null)

    const login = (form: IUser) => authUtil.login(form).then(res => setUser(res))
    const register = (form: IUser) => authUtil.register(form).then(setUser)
    const logout = () =>
        authUtil.logout().then(() => {
            setUser(null)
        })

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error('not login')
    }
    return context
}
