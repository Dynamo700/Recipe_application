import './App.css';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

export function View() {

  let recipeData = [ {name: "pizza", ingreidents: "cheese, dough, pizza sauce, pepperoni", directions: "cook at 350", description: "round"},
                      {name: "cupcake", ingreidents: "flour, sugar, egg, water ", direcations: "cook at 400", description: "cupcake"}];


  const [recipes, setRecipes] = useState(recipeData);


  useEffect( () =>{
    setRecipes(recipeData)
  }, [])


  return(
    recipes.map( (recipes, i)=> {
      return <h3>{recipes.name}</h3>
     
    })
  )
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