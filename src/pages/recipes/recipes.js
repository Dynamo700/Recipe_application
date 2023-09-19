export function RecipeList( {Recipes} ){
    return (
        Recipes.map((recipe, i) => {
            console.log(recipe)
            return (
            <>
                <Recipe recipeName={recipe.name} recipeIngreident={recipe.ingreidents} recipeDirections={recipe.directions} recipeImage={recipe.image}/>
                

            </>
            )
            
            
                    
                    
        })
    )
}

function Recipe( {recipeName, recipeIngreident, recipeDirections, recipeImage} ) {

    return (
        <>
        <h3>{recipeName}</h3>
        <h3>{recipeIngreident}</h3>
        <h3>{recipeDirections}</h3>
        <img src={recipeImage} width="300" height="300"/>
        </>
        
        
    )
}