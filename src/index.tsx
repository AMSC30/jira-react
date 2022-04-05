import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { DevTools, loadServer } from 'jira-dev-tool'
import { AuthProvider } from './context/auth-context'
import 'antd/dist/antd.css'

loadServer(() => {
    ReactDOM.render(
        <React.StrictMode>
            <AuthProvider>
                <DevTools />
                <App />
            </AuthProvider>
        </React.StrictMode>,
        document.getElementById('root')
    )
})

reportWebVitals()
