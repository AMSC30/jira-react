import { useAuthContext } from 'context/auth-context'
import { FormEvent } from 'react'

export const Login = () => {
    const authContext = useAuthContext()
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const param = {
            username: (event.currentTarget.elements[0] as HTMLInputElement).value,
            password: (event.currentTarget.elements[0] as HTMLInputElement).value
        }
        authContext.login(param)
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">
                    <input type="text" id={'username'} />
                </label>
            </div>
            <div>
                <label htmlFor="username">
                    <input type="text" id={'password'} />
                </label>
            </div>
            <button type={'submit'}>登录</button>
        </form>
    )
}
