import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Home from './pages/Home'
import CreatePost from './pages/CreatePost';
import Posts from './pages/Posts';


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Jumbotron />
        <Routes>
          <Route path="/" exact element={<Home />}/>
          <Route path="/posts" element={<Posts />}/>
          <Route path="/create" element ={<CreatePost />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
