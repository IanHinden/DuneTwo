import React from 'react'
import {BrowserRouter, BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home'
import CreatePost from './pages/CreatePost';
import Posts from './pages/Posts';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />}/>
        <Route path="/posts" element={<Posts />}/>
        <Route path="/create" element ={<CreatePost />}/>
      </Routes>
    </Router>
  );
}

export default App;
