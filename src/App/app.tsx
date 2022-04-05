import { useAuthContext } from 'context/auth-context'
import { Login } from 'views/login/Login'
import { Register } from 'views/register/Register'
import './app.css'

function App() {
    const authContext = useAuthContext()
    return <div>{authContext.user ? <Login></Login> : <Register></Register>}</div>
}

export default App
