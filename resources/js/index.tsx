import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CustomerLogin from './Pages/CustomerLogin';
import StaffLogin from './pages/StaffLogin';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/staff/login" element={<StaffLogin />} />
        <Route path="/customer/login" element={<CustomerLogin />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('app')
);
