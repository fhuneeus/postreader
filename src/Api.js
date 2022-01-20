import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


export async function getPosts() {

  let url = "https://jsonplaceholder.typicode.com/posts";

  let response = await fetch(url);
  let processedResponse = await response.json();

  return processedResponse;

}

export async function getComments(id) {

    let url = "https://jsonplaceholder.typicode.com/posts/"+id;
  
    let response = await fetch(url);
    let processedResponse = await response.json();
  
    return processedResponse;
  
  }