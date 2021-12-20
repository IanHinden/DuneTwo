import React, {useState, useMemo} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import { UserContext } from './UserContext';

import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Home from './pages/Home'
import CreatePost from './pages/CreatePost';
import Posts from './pages/Posts';


function App() {
  const [user, setUser] = useState(null);

  const providerValue = useMemo(() => ({user, setUser}), [user, setUser]);

  return (
    <div>
      <Router>
      <UserContext.Provider value={providerValue}>
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
