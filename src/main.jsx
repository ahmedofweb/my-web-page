import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ContexProvider } from './components/Contex' 

ReactDOM.createRoot(document.getElementById('root')).render(
   <ContexProvider>
      <App />
   </ContexProvider>
)
