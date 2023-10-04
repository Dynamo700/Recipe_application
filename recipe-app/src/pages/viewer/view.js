import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from 'react';
import { RecipeList } from "../recipes/recipes";
import axios from "axios";


export function View() {
  const [recipes, setRecipes] = useState(null);

  useEffect(() =>{


    const recipesDbData = load()

    // const recipesData = localStorage.getItem('recipesData');
    
    // if(recipesData){
    //   setRecipes(JSON.parse(recipesData))
    // }
    
    
  }, [])

  async function load(){
    await axios.get('http://localhost:8000/recipes').then((response) =>{
      //do whatever with that response
      // console.log(response.data)

      const recipesData = response.data
      setRecipes(recipesData)

    })
  }

  function Remove(i){
    const recipeName = recipes[i].name

    console.log(recipeName)

    axios.delete('http://localhost:8000/delete/'+recipeName).then((response) => {
      console.log(response)
    })
    

    //update the state, and then update the local storage
    const updatedRecipes = [...recipes]

    //remove specific item at index i
    updatedRecipes.splice(i, 1)

    //Now, update the recipes state
    setRecipes(updatedRecipes)

    //resetting the recipes in localstorage
    

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