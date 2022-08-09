import React, { useEffect, useContext } from 'react';
import './App.css';
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Pages/Home';
import { AuthContext } from './store/Context';
import Create from './Pages/Create'
import View from './Pages/ViewPost'
import ViewPost from './Pages/ViewPost';
import Post from './store/PostContext';
import Button from './store/FpostContext'
import { getPosts } from './Action/product';
function App() {

  const { user, setUser } = useContext(AuthContext)
 

  return (
    <div>
        <Button>
            <Post>
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/create" element={<Create />} />
                  <Route path="/view" element={<ViewPost />} />

                </Routes>
              </BrowserRouter>
            </Post>
        </Button>
    </div>
  );
}

export default App;
