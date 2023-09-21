import { Link, Route, Routes, BrowserRouter } from "react-router-dom";
import { useState, useEffect, useRef } from 'react';


export function Add() {
    const [name, setName] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [description, setDescription] = useState("");
    const [directions, setDirections] = useState("");
    const [data, setData] = useState([]);
    

    useEffect(() => {
      
      const recipesData = localStorage.getItem('recipesData');
      
      if(recipesData){
        setData(JSON.parse(recipesData))
      }

    }, [])

    function handleNameInput(event){
      const value = event.target.value;
      setName(value)
    }

    function handleIngreidentsInput(event){
      const value = event.target.value;
      setIngredients(value);
    }

    function handleDescriptionInput(event){
      const value = event.target.value;
      setDescription(value);
    }

    function handleDirectionsInput(event){
      const value = event.target.value;
      setDirections(value);
    }

    function handleSubmit(){
      const recipe = {
        name: name,
        description: description,
        ingredients: ingredients,
        directions: directions
      }

      
      const updatedData = [...data] //copied orginal state

            updatedData.push(recipe) //appended recipe

            setData(updatedData)

            console.log(updatedData)
            localStorage.setItem('recipesData', JSON.stringify(updatedData));

      // console.log(recipe)

    }

      
      // txtTitle.current.value = "";
    
    return (
      <div>
        <nav>
          <Link to="/">View</Link>
          <Link to="/add">Add</Link>
        </nav>
        <h1>Add Recipe</h1>     
          <label for="name">Name:</label>
          <input type="text" value={name} onChange={handleNameInput}></input>
          <br></br>
          <label for="ingreidents">ingreidents</label>
          <input type="text" value={ingredients} onChange={handleIngreidentsInput}></input>
          <br></br>
          <label for="directions">directions</label>
          <input type="text" value={directions} onChange={handleDirectionsInput}></input>
          <br></br>
          <label for="descriptions">descriptions</label>
          <input type="text" value={description} onChange={handleDescriptionInput}></input>
          <button onClick={handleSubmit}>Submit</button>
      </div>
    )
  }