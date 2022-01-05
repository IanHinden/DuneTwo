import React, {useState, useMemo, useEffect} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import { UserContext } from './UserContext';

import Navbar from './components/Navbar';
import NavbarTest from './components/NavbarTest';
import Jumbotron from './components/Jumbotron';
import Home from './pages/Home'
import CreatePost from './pages/CreatePost';
import Posts from './pages/Posts';


function App() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('User'))
  );

  const providerValue = useMemo(() => ({user, setUser}), [user, setUser]);

  useEffect(() => {
    localStorage.setItem('User', JSON.stringify(user));
  });

  return (
    <div>
      <Router>
      <UserContext.Provider value={providerValue}>
        <NavbarTest />
        <Navbar />
        <Jumbotron />
          <Routes>
            <Route path="/" exact element={<Home />}/>
            <Route path="/posts" element={<Posts />}/>
            <Route path="/create" element ={<CreatePost />}/>
          </Routes>
      </UserContext.Provider>
      </Router>
    </div>
  );
}

export default App;
