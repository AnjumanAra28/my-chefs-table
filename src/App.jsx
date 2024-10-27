import "./App.css";
import Header from "./components/Header";
import OurRecipe from "./components/OurRecipe";
import Banner from "./components/Banner";
import Sidebar from "./components/Sidebar";
import RecipeDescription from "./components/RecipeDescription";
import { useState } from "react";

function App() {
  const [recipeQueue, setRecipeQueue] = useState([]);
  const [preparedRecipe,setPreparedRecipe] =useState([]);
  const [totalTime,setTotalTime] = useState(0)
  const [totalCalorie,setTotalCalorie] = useState(0)

  const addTotalTimeAndCalorie =(time,calorie)=>{
       const updatedTime = totalTime + time;
       setTotalTime(updatedTime)
       const updatedCalorie = totalCalorie + calorie;
       setTotalCalorie(updatedCalorie)

  }
  
  const handlePreparedRecipe =(id)=>{
    const deletedRecipe = recipeQueue.find(recipe=>recipe.recipe_id === id.recipe_id)
    setPreparedRecipe([...preparedRecipe,deletedRecipe])

    const processingRecipe = recipeQueue.filter(recipe=>recipe.recipe_id !==id.recipe_id)
    setRecipeQueue(processingRecipe)

  }
  const handleRecipeQueue = (recipe) => {
    const existingRecipe = recipeQueue.find(
      (queuedRecipe) => queuedRecipe.recipe_id === recipe.recipe_id
    );

    if (!existingRecipe) {
      const newRecipeQueue = [...recipeQueue, recipe];
      setRecipeQueue(newRecipeQueue);
    }
    else{
      alert('already the dish is under processing')
    }
  };

  return (
    <>
      <div className="w-11/12 mx-auto">
        <Header></Header>
        <Banner></Banner>
        <RecipeDescription></RecipeDescription>
        <section className="flex flex-col md:flex-row">
          <OurRecipe handleRecipeQueue={handleRecipeQueue}></OurRecipe>
          <Sidebar addTotalTimeAndCalorie={addTotalTimeAndCalorie} preparedRecipe={preparedRecipe} handlePreparedRecipe={handlePreparedRecipe} recipeQueue={recipeQueue} totalCalorie={totalCalorie} totalTime={totalTime}></Sidebar>
        </section>
      </div>
    </>
  );
}

export default App;
