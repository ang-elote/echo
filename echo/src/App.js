import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SplashScreen from './pages/Splash';
import Access from './pages/Access';
import Register from './pages/Register';
import Login from './pages/Login';
import ChangePassword from './pages/Changepassword';
import Home from './pages/Home';
import MakePost from './pages/Makepost';
import EditPost from './pages/Editpost';
import Profile from './pages/Profile';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/access" element={<Access />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/change-password" element={<Changepassword />} />
      <Route path="/home" element={<Home />} />
      <Route path="/make-post" element={<Makepost />} />
      <Route path="/edit-post/:id" element={<Editpost />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
