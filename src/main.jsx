import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {NextUIProvider} from "@nextui-org/system";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
    <div className="w-screen h-screen dark text-foreground bg-background p-8 flex flex-col items-center justify-center m-10">
    <App />
    </div>
    </NextUIProvider>
  </React.StrictMode>,
)
