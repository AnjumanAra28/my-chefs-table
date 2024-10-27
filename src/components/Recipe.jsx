import PropTypes from "prop-types";

const Recipe = ({ recipe , handleRecipeQueue}) => {
  const {
    recipe_name,
    recipe_img,
    short_description,
    ingredients,
    calories,
    preparing_time,
  } = recipe;
  return (
    <div className="">
      <div className="card bg-base-100 w-96 shadow-xl ">
        <figure>
          <img
            src={recipe_img}
            alt="recipe image"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{recipe_name}</h2>
          <p>{short_description}</p>
          <h3>Ingredients: {ingredients.length}</h3>
          {ingredients.map((item,idx)=><li className="pl-5" key={idx}>{item}</li>)}
          <div className="flex gap-12 my-3">
            <h2><i className="fa-regular fa-clock"></i> {preparing_time}</h2>
            <h2><i className="fa-solid fa-fire"></i> {calories} calorie</h2>
          </div>
          <div className="card-actions">
            <button onClick={()=>{handleRecipeQueue(recipe)}} className="btn btn-accent rounded-full">Want to Cook</button>
          </div>
        </div>
      </div>
    </div>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.object,
  handleRecipeQueue:PropTypes.func
};
export default Recipe;
