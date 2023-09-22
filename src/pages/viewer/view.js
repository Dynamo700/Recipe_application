import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from 'react';
import { RecipeList } from "../recipes/recipes";

export function View() {
  const [recipes, setRecipes] = useState(null);

  useEffect(() =>{
    const recipesData = localStorage.getItem('recipesData');

    if(recipesData){
      setRecipes(JSON.parse(recipesData))
    }

  }, [])

  function Remove(i){
    console.log("removeFunction")
    console.log(i)

    //update the state, and then update the local storage
    const updatedRecipes = [...recipes]

    //remove specific item at index i
    updatedRecipes.splice(i, 1)

    //Now, update the recipes state
    setRecipes(updatedRecipes)

    //resetting the recipes in localstorage
    localStorage.setItem('recipesData', JSON.stringify(updatedRecipes));

  }

  if (recipes === null) {
    return (
        <div>
          <nav>
            <Link to="/">View</Link>
            <Link to="/add">Add</Link>
          </nav>
        </div>
    )
  }

    
    //select radio buttons for images
    
  return(
    <div>
      <nav>
    <Link to="/">View</Link>
    <Link to="/add">Add</Link>
      </nav>
      <h1>View Recipes</h1>
      <RecipeList Recipes={recipes} 
      RecipeDelete={Remove}/>

      
    </div>
  )
}