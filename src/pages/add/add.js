import { Link, Route, Routes, BrowserRouter } from "react-router-dom";
import { useState, useEffect, useRef } from 'react';


export function Add() {
    const txtTitle = useRef();
    console.log(txtTitle);
    const submit = e => {
      e.preventDefault();
      const name = txtTitle.current.value;
      console.log(`${name}`)
      txtTitle.current.value = "";
    };
    return (
      <div>
        <nav>
          <Link to="/">View</Link>
          <Link to="/add">Add</Link>
        </nav>
        <h1>Add Recipe</h1>
        <form onSubmit={submit}>
          <label for="name">Name:</label>
          <input type="text" ref={txtTitle} id="Recipename" name="name"></input>
          <br></br>
          <label for="ingreidents">ingreidents</label>
          <input type="text" ref={txtTitle} id="RecipeIngreidents" name="ingreidents"></input>
          <br></br>
          <label for="directions">directions</label>
          <input type="text" ref={txtTitle} id="RecipeDirections" name="directions"></input>
          <br></br>
          <label for="desciptions"></label>
          <input type="text" ref={txtTitle} id="Recipename" name="name"></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }