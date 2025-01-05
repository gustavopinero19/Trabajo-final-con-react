import React from 'react';

const RecipeBuilder = ({ selectedIngredients, setSelectedIngredients }) => {
  const updateQuantity = (id, newQuantity) => {
    setSelectedIngredients(
      selectedIngredients.map((ingredient) =>
        ingredient.id === id ? { ...ingredient, quantity: newQuantity } : ingredient
      )
    );
  };

  return (
    <div>
      <h2>Ingredientes seleccionados</h2>
      {selectedIngredients.map((ingredient) => (
        <div key={ingredient.id}>
          <span>{ingredient.name}</span>
          <input
            type="number"
            value={ingredient.quantity}
            onChange={(e) => updateQuantity(ingredient.id, parseInt(e.target.value))}
            min="1"
          />
        </div>
      ))}
    </div>
  );
};

export default RecipeBuilder;
