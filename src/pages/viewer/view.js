import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from 'react';
import { RecipeList } from "../recipes/recipes";


    export function View() {


        const [recipes, setRecipes] = useState(
         
          [ {"name": "pizza", 
          "ingreidents": "cheese, dough, pizza sauce, pepperoni", 
          "directions": "cook at 350", 
          "description": "round",
          "image": "./images/pizza.jpeg"},
          {"name": "cupcake", 
          "ingreidents": "flour, sugar, egg, water ", 
          "directions": "cook at 400", 
          "description": "cupcake",
          "image": "./images/cupcake.jpg"}]
      
        );

    useEffect( () => {
        loadRecipes()
    }, [])

    const loadRecipes = () => {
        fetch("./recipes.json",
        {
            headers: {
                'Content-Type': 'Application/json',

                'Accept': 'application/json'
            }
        })
        .then( function(response){
            return response.json();
        })
        .then( function(recipes) {
            console.log(recipes)
        })
        .then( setRecipes(recipes))
        .catch( e => console.log(e.message));
    }

    if (recipes == null) {
        return <div>Now loading....</div>
    }
    




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