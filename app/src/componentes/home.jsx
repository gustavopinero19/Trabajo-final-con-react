// src/components/Home.jsx
import React from 'react';

const Home = ({ changeView }) => {
  return (
    <div>
      <h1>Cocinando tu Receta</h1>
      <button onClick={() => changeView('create-recipe')}>Crear receta</button>
      <button onClick={() => changeView('recipe-history')}>Ver historial de recetas</button>
    </div>
  );
};

export default Home;
