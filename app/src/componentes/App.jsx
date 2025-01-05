import React, { useState, useEffect } from "react";
import Home from "./componentes/Home";
import CreateRecipe from "./componentes/CreateRecipe";
import RecipeHistory from "./componentes/RecipeHistory";



const App = () => {
  const [view, setView] = useState('home'); // Establecer vista inicial
  const [recipes, setRecipes] = useState(JSON.parse(localStorage.getItem('recipes')) || []); // Recetas guardadas

  // Cambiar vista
  const changeView = (newView) => setView(newView);

  // Guardar recetas en localStorage
  useEffect(() => {
    localStorage.setItem('recipes', JSON.stringify(recipes));
  }, [recipes]);

  return (
    <div>
      {view === 'home' && <Home changeView={changeView} />}
      {view === 'create-recipe' && <CreateRecipe setRecipes={setRecipes} />}
      {view === 'recipe-history' && <RecipeHistory recipes={recipes} />}
    </div>
  );
};

export default App;
