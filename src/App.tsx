import { useAuthContext } from 'context/auth-context'
import Login from './views/login'
import Main from './views/main/main'
function App() {
    const authContext = useAuthContext()
    return <div>{authContext.user ? <Main /> : <Login />}</div>
}

export default App
