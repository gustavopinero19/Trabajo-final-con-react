import React, { useState, useEffect } from 'react';
import IngredientList from './IngredientList';
import RecipeBuilder from './RecipeBuilder';
import RecipeSummary from './RecipeSummary';

const CreateRecipe = ({ setRecipes }) => {
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [recipeName, setRecipeName] = useState('');
  const [nutritionalScore, setNutritionalScore] = useState(0);

  // Actualizar puntaje nutricional
  useEffect(() => {
    const score = selectedIngredients.reduce((acc, ingredient) => acc + ingredient.nutritionalValue * ingredient.quantity, 0);
    setNutritionalScore(score);
  }, [selectedIngredients]);

  const saveRecipe = () => {
    const newRecipe = { name: recipeName, ingredients: selectedIngredients, score: nutritionalScore };
    setRecipes((prevRecipes) => [...prevRecipes, newRecipe]);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Nombre de la receta"
        value={recipeName}
        onChange={(e) => setRecipeName(e.target.value)}
      />
      <IngredientList selectedIngredients={selectedIngredients} setSelectedIngredients={setSelectedIngredients} />
      <RecipeBuilder selectedIngredients={selectedIngredients} setSelectedIngredients={setSelectedIngredients} />
      <RecipeSummary score={nutritionalScore} />
      <button onClick={saveRecipe}>Guardar receta</button>
    </div>
  );
};

export default CreateRecipe;
