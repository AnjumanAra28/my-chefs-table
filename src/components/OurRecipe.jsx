import { useEffect } from "react";
import { useState } from "react";
import Recipe from "./recipe";
import PropTypes from 'prop-types'

const OurRecipe = ({handleRecipeQueue}) => {
  
 const [recipes,setRecipes] = useState([])

 useEffect(()=>{
     fetch('recipe.json')
     .then(res=>res.json())
     .then(data=>setRecipes(data))
 },[])

 
    return (
        <div className="w-2/3 mb-10 grid grid-cols-1 md:grid-cols-2 gap-5">
           {
            recipes.map((recipe)=><Recipe  handleRecipeQueue={handleRecipeQueue} key={recipe.recipe_id}  recipe={recipe}></Recipe>)
           }
        </div>
    );
};

OurRecipe.propTypes={
    handleRecipeQueue:PropTypes.func
}




export default OurRecipe;