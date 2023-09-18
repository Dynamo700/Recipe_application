import './App.css';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { RecipeList } from './recipes';

export function View() {

  let recipeData = [ {name: "pizza", 
                      ingreidents: "cheese, dough, pizza sauce, pepperoni", 
                      directions: "cook at 350", 
                      description: "round",
                      image: "./images/pizza.jpg"},
                      {name: "cupcake", 
                      ingreidents: "flour, sugar, egg, water ", 
                      directions: "cook at 400", 
                      description: "cupcake",
                      image: "./images/cupcake.jpg"}];


  const [recipes, setRecipes] = useState(recipeData);


  useEffect( () =>{
    setRecipes(recipeData)
  }, [])


  return(
    <div>
      <nav>
        <Link to="/">View</Link>
        <Link to="/add">Add</Link>
      </nav>
      <h1>View Recipes</h1>
      <RecipeList Recipes={recipes}/>
    </div>
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