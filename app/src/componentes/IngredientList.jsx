import React from 'react';

const IngredientList = ({ selectedIngredients, setSelectedIngredients }) => {
  const ingredients = [
    { id: 1, name: 'Pollo', category: 'Proteínas', nutritionalValue: 3 },
    { id: 2, name: 'Arroz', category: 'Carbohidratos', nutritionalValue: 2 },
    { id: 3, name: 'Brócoli', category: 'Verduras', nutritionalValue: 1 },
  ];

  const handleDrag = (ingredient) => {
    if (!selectedIngredients.includes(ingredient)) {
      setSelectedIngredients([...selectedIngredients, { ...ingredient, quantity: 1 }]);
    }
  };

  return (
    <div>
      <h2>Ingredientes</h2>
      <div>
        {ingredients.map((ingredient) => (
          <div key={ingredient.id} onClick={() => handleDrag(ingredient)}>
            {ingredient.name} ({ingredient.category})
          </div>
        ))}
      </div>
    </div>
  );
};

export default IngredientList;
