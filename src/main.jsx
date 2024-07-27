import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/Start-Framework">  // Ensure this matches your GitHub repo name or Vercel project name
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
