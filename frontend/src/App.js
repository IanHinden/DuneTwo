import React, {useState, useMemo, useEffect} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import config from "./config.json";

import { UserContext } from './UserContext';
import axios from "axios";

import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Home from './pages/Home'
import Blogs from './pages/Blogs';
import Prompts from './pages/Prompts';
import Terms from './pages/Terms';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Signup from './pages/Signup';


function App() {
  const [user, setUser] = useState(null)

  const providerValue = useMemo(() => ({user, setUser}), [user, setUser]);

  useEffect(() => {
    axios
    .get(`${config.SERVER_URL}isLoggedIn`, {withCredentials: true})
    .then(res => {
        setUser(res.data._id);
        localStorage.setItem('User', res.data._id);
    })
    .catch(err => {
        console.log(err);
        console.log(err.response);
    });
  });

  return (
    <div>
      <Router>
      <UserContext.Provider value={providerValue}>
        <Navbar />
        <Jumbotron />
          <Routes>
            <Route path="/" exact element={<Home />}/>
            <Route path="/blogs/:id" element ={<Blogs />}/>
            <Route path="/prompts/:id" element={<Prompts />}/>
            <Route path="/termsofservice" element={<Terms />}/>
            <Route path="/privacypolicy" element={<PrivacyPolicy />}/>
            <Route path="/signup" element={<Signup />}/>
          </Routes>
      </UserContext.Provider>
      </Router>
    </div>
  );
}

export default App;
