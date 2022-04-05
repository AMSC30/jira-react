import { createContext, ReactNode, useContext, useState } from 'react'
import * as authUtil from 'util/auth-util'
import useMount from 'hooks/use-mount'
import { httpGet } from 'util/http'
import { QueryClient, QueryClientProvider } from 'react-query'

interface IUser {
    username: string
    password: string
}
interface IResUser {
    id: number
    name: string
    token: string
}
interface IContext {
    user: IResUser | null
    login: (form: IUser) => Promise<void>
    register: (form: IUser) => Promise<void>
    logout: () => Promise<void>
}

const bootstrapUser = async () => {
    let user = null
    if (authUtil.getToken()) {
        const data = await httpGet('me', null)
        user = data.user
    }
    return user
}

const AuthContext = createContext<IContext | undefined>(undefined)
AuthContext.displayName = 'AuthContext'

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<IResUser | null>(null)

    const login = (form: IUser) => authUtil.login(form).then(setUser)
    const register = (form: IUser) => authUtil.register(form).then(setUser)

    const logout = () =>
        authUtil.logout().then(() => {
            setUser(null)
        })

    useMount(() => {
        bootstrapUser().then(setUser)
    })

    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false
            }
        }
    })

    return (
        <QueryClientProvider client={queryClient}>
            <AuthContext.Provider value={{ user, login, register, logout }}>
                {children}
            </AuthContext.Provider>
        </QueryClientProvider>
    )
}

export const useAuthContext = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error('not login')
    }
    return context
}
