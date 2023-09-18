export function RecipeList( {Recipes} ){
    return (
        Recipes.map((recipe, i) => {
            return <Recipe recipeName={recipe.name}/>
                    
                    
        })
    )
}

function Recipe( {recipeName} ) {

    return (
        <h3>{recipeName}</h3>
        
    )
}