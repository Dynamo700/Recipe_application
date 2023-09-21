export function RecipeList( {Recipes} ){
    return (
        Recipes.map((recipe, i) => {
            console.log(recipe)
            return (
            <>
                <Recipe recipeName={recipe.name} 
                recipeIngredient={recipe.ingredient} 
                recipeDirections={recipe.directions} 
                recipeDescription={recipe.description} 
                recipeImage={recipe.image}/>
            </>
            )
            
            
                    
                    
        })
    )
}

function Recipe( {recipeName, recipeIngredient, recipeDirections, recipeDescription, recipeImage} ) {

    return (
        <>
        <h3>Name: {recipeName}</h3>
        <h3>Ingredients: {recipeIngredient}</h3>
        <h3>Directions: {recipeDirections}</h3>
        <h3>Description: {recipeDescription}</h3>
        <img src={recipeImage} width="350" height="350"/>
        </>
        
        
    )
}