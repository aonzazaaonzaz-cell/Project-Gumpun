import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import './index.css'; // ตรงนี้แหละครับที่เป็นการดึงไฟล์สีสันที่เราเพิ่งสร้างเมื่อกี้มาใช้

// โค้ดส่วนนี้คือการนำ App (หน้าเว็บ) ไปแสดงผลในแท็ก id="root" ของไฟล์ index.html
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);