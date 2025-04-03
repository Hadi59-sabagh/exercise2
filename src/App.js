// src/App.js
import React from 'react';
import './styles.css';  // فایل CSS رو وارد می‌کنیم
import UserList from './UserList';  // فایل UserList رو وارد می‌کنیم
import ImageGallery from './ImageGallery';  // فایل ImageGallery رو وارد می‌کنیم

const App = () => {
  return (
    <div className="App">
      <h1>Welcome to My React App</h1>
      <UserList />
      <ImageGallery />
    </div>
  );
};

export default App;
