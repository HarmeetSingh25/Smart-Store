import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { StoreContext, StoreProvider } from './context/StoreContext.jsx'

createRoot(document.getElementById('root')).render(
    <StoreProvider>

        <App />
    </StoreProvider>

)
