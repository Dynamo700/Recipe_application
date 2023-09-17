import './App.css';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

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
    recipes.map( (recipes, i)=> {
      return (<div>
      <h3>{recipes.name}</h3>
      <h3>{recipes.ingreidents}</h3>
      <h3>{recipes.directions}</h3>
      <h3>{recipes.description}</h3>
      <img height={300} src={recipes.image} />
      </div>
      )
     
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