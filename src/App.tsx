import { useAuthContext } from 'context/auth-context'
import Login from './views/login'
import Main from './views/main/main'
import { ErrorBoundary } from 'react-error-boundary'

function ErrorFallback() {
    return <div role="alert">发生了错误</div>
}

function App() {
    const authContext = useAuthContext()
    return (
        <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {}}>
            <div>{authContext.user ? <Main /> : <Login />}</div>
        </ErrorBoundary>
    )
}

export default App
