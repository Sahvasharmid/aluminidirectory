import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import  { AuthProvider } from './utils/AuthContext';

import { BrowserRouter as Router} from 'react-router-dom'
import { MemberProvider } from './utils/MemberContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <AuthProvider>
     <MemberProvider>
     <App/>
     </MemberProvider>
     
   
    </AuthProvider>
    
    </Router>
  </React.StrictMode>
);

