import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'primereact/resources/themes/lara-light-cyan/theme.css'
import { PrimeReactProvider } from 'primereact/api'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PrimeReactProvider value={{ unstyled: true }}>
      <App />
    </PrimeReactProvider>
  </React.StrictMode>,
)
