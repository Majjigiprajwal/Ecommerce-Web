// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes,Navigate} from 'react-router-dom';
import Login from './components/Auth/Login';
import SignUp from './components/Auth/Signup';
import Home from './pages/Home'
import Store from './pages/Store'
import Cart from './pages/Cart'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;


