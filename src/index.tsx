import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App/app'
import reportWebVitals from './reportWebVitals'
import { loadDevTools } from 'jira-dev-tool'
import { AuthProvider } from './context/auth-context'

loadDevTools(() => {
    ReactDOM.render(
        <React.StrictMode>
            <AuthProvider>
                <App />
            </AuthProvider>
        </React.StrictMode>,
        document.getElementById('root')
    )
})

reportWebVitals()
