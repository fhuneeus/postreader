import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import {getPosts, getAllComments, getComments} from './Api';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Post(props) {
  
  const [comments, setComments] = useState([]);


  const getAllComments = async (id) => {
    
    const apiResponse = await getComments(id);
    setComments(apiResponse);
  }

  useEffect(() => {
  
    getAllComments(props.id);

  }
  , []);


  let listComments = 
    <div>
    <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{comments.id}. {comments.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {comments.body}
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>;

  return (
    <div className="App">
    {listComments}
    </div>
  );
}

export default Post;
