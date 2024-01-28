import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { SkeletonTheme } from "react-loading-skeleton";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SkeletonTheme baseColor="#d9d9d9">
    <App />
    </SkeletonTheme>
  </React.StrictMode>,
)
