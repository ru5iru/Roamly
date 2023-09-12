import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { DarkModeContextProvider } from './context/darkModeContext.js'
import { AuthContextProvider } from './context/authContext.js'
import { ChatContextProvider } from './context/ChatContext.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <AuthContextProvider>
        <ChatContextProvider>
        <App />
        </ChatContextProvider>
      </AuthContextProvider>
    </DarkModeContextProvider>
  </React.StrictMode>,
)