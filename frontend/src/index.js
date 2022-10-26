import React from 'react';
import ReactDOM from 'react-dom/client';

//! The style
import './style/style.css';

//! App.jsx
import App from './App.jsx';

//! ContextProvider
import AuthContextProvider from "./contexts/AuthContexts.jsx"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <AuthContextProvider>
         <App />
      </AuthContextProvider>
   </React.StrictMode>
);

