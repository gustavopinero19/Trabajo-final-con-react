import React from 'react';

const RecipeCard = ({ recipe }) => {
  return (
    <div>
      <h3>{recipe.name}</h3>
      <p>Puntaje: {recipe.score}</p>
      <button>Eliminar</button>
    </div>
  );
};

export default RecipeCard;
