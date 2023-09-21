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

    if (recipes === null) {
      return <div>Now loading...</div>
    }
    
    //select radio buttons for images
    
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