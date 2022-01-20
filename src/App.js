import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import {getPosts, getComments} from './Api';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Post from './Post';

function App() {
  

  const [posts, setPosts] = useState([]);


  const getAllPosts = async () => {
    
    const apiResponse = await getPosts();
    setPosts(apiResponse);

  }

  useEffect(() => {
  
    getAllPosts();

  }
  , []);

  const postList = posts.map(post => {
    return <Post id={post.id}/>  
  });


  return (
    <div>
    <div className="App">
    {postList}
    </div>
    </div>
  );
}

export default App;
