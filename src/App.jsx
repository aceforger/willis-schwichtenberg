import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import BookShop from './components/BookShop';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/book-shop" element={<BookShop />} />
      </Routes>
    </Router>
  );
}

export default App;