import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {OrderProvider} from "./Components/OrderDataTable/OrderContext.jsx";



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <OrderProvider>
          <App />
      </OrderProvider>
  </React.StrictMode>,
)
