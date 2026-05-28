import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ContextProvider from './React_Hooks/useContext/AppContext.jsx'
createRoot(document.getElementById('root')).render(
    <ContextProvider>
      <App />
    </ContextProvider>
)
