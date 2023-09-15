import './App.css';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

export function View() {
  return(
    <div>
      <nav>
        <Link to="/">View</Link>
        <Link to="/add">Add</Link>
      </nav>
      <h1>Recipe viewer</h1>
      <h3>recipe name</h3>
      <h3>recipe ingreidents</h3>
      <h3>recipe directions</h3>
      <h3>image of recipe</h3>
    </div>
  );
}

export function Add() {
  return (
    <div>
      <nav>
        <Link to="/">View</Link>
        <Link to="/add">Add</Link>
      </nav>
      <h1>Add</h1>
    </div>
  )
}

export function App() {
  return <View />;
}