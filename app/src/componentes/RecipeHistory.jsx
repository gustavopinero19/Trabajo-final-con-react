import React from 'react';
import RecipeCard from './RecipeCard';

const RecipeHistory = ({ recipes }) => {
  return (
    <div>
      <h2>Historial de Recetas</h2>
      {recipes.map((recipe, index) => (
        <RecipeCard key={index} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeHistory;
