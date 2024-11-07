// import React from 'react'
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { HashRouter as Router } from 'react-router-dom';
import store from './store';
import AuthProvider from "./auth/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  // React.StrictMode
  <>
    <Router >
      <Provider store={store}>
        <AuthProvider>
            <App />
        </AuthProvider>
      </Provider>
    </Router>
  </>,
)
