import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  RouterProvider,
} from "react-router-dom";
// import AuthProvider from './Providers/AuthProvider';
import router from './Route/Routes';
import AuthProvider from './Providers/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-6xl mx-auto'>
    <React.StrictMode>
      <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
    </React.StrictMode>,
  </div>
)