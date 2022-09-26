import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AddressForm from './components/form/AddressForm'
import './index.css';
import './forms.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <AddressForm />        
  </BrowserRouter>  
);
