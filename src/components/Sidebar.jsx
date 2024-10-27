import PropTypes from "prop-types";
const Sidebar = ({
  recipeQueue,
  handlePreparedRecipe,
  preparedRecipe,
  addTotalTimeAndCalorie,
  totalCalorie,
  totalTime
}) => {
    console.log(typeof(totalCalorie,totalTime));
  return (
    <div className="w-1/3 border border-gray-300 p-5 rounded-lg">
      <div>
        <h1 className="text-lg font-semibold text-center mb-2">
          Want to cook: {recipeQueue.length}
        </h1>
        <hr className="mt-2 border-gray-300" />
      </div>
      {/* preparing dish section */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {recipeQueue.map((recipe, index) => (
              <tr key={index} className="hover">
                <td>{index + 1}</td>
                <td>{recipe.recipe_name}</td>
                <td>{recipe.preparing_time}</td>
                <td>{recipe.calories}</td>
                <td>
                  <button
                    onClick={() => {
                      handlePreparedRecipe(recipe);
                      addTotalTimeAndCalorie(
                        recipe.preparing_time,
                        recipe.calories
                      );
                    }}
                    className="btn btn-accent rounded-full"
                  >
                    Preparing
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* currently cooking section */}

      <div className="mt-4">
        <h1 className="text-lg font-semibold text-center mb-2">
          Currently Cooking: {preparedRecipe.length}
        </h1>
        <hr className="mt-2 border-gray-300" />
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {preparedRecipe.map((recipe, index) => (
              <tr key={index} className="hover">
                <td>{index + 1}</td>
                <td>{recipe.recipe_name}</td>
                <td>{recipe.preparing_time}</td>
                <td>{recipe.calories}</td>
              </tr>
            ))}
            <tr>
              <td></td>
              <td></td>
              <td>Total time: {totalTime} </td>
              <td>Total Calorie: {totalCalorie} </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  recipeQueue: PropTypes.array,
  handlePreparedRecipe: PropTypes.func,
  preparedRecipe: PropTypes.array,
  addTotalTimeAndCalorie: PropTypes.func,
  totalTime:PropTypes.number,
  totalCalorie:PropTypes.number,
};
export default Sidebar;
