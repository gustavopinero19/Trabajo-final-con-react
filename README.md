# Cocinando tu Receta - Proyecto Final React 

**Cocinando tu Receta** es una aplicación interactiva desarrollada con React, que permite a los usuarios crear recetas personalizadas seleccionando ingredientes, ajustando las cantidades y obteniendo un puntaje nutricional en tiempo real. Además, los usuarios pueden guardar y consultar sus recetas en el historial.

## Descripción

La aplicación permite a los usuarios armar recetas personalizadas seleccionando ingredientes de una lista interactiva, ajustando sus cantidades y visualizando un puntaje nutricional calculado dinámicamente. Las recetas creadas se guardan en el historial, utilizando `localStorage` para mantenerlas disponibles entre sesiones.

## Características

- **Página Principal:**
  - Introducción al proyecto y botón para iniciar la creación de una receta.
  
- **Panel de Creación de Recetas:**
  - Lista interactiva de ingredientes organizados en categorías (proteínas, carbohidratos, vegetales, etc.).
  - Panel de arrastrar y soltar ingredientes para formar la receta.
  - Campo para nombrar la receta.
  - Puntaje nutricional calculado en tiempo real.

- **Historial de Recetas:**
  - Guarda las recetas creadas en `localStorage` y las muestra en una lista.
  - Permite eliminar o ver detalles de cada receta.

## Tecnologías Utilizadas

- **React:** Framework para construir la interfaz de usuario.
- **JavaScript (ES6+):** Lenguaje de programación principal.
- **CSS:** Estilos personalizados para la aplicación.
- **localStorage:** Para persistir las recetas entre sesiones.

## Estructura de la Aplicación

La navegación entre las diferentes vistas (Home, Crear Receta, Historial de Recetas) se maneja mediante el estado local del componente raíz (`App.jsx`), sin utilizar React Router.

### Componentes Principales:

- **App.jsx:** Componente raíz que maneja el estado global de la aplicación (vista actual, recetas guardadas).
- **Home.jsx:** Componente de la página principal, con la introducción y un botón para ir a la creación de recetas.
- **CreateRecipe.jsx:** Componente principal para la creación de recetas, que incluye:
  - **IngredientList.jsx:** Lista de ingredientes disponibles.
  - **RecipeBuilder.jsx:** Panel donde se pueden ajustar las cantidades de los ingredientes seleccionados.
  - **RecipeSummary.jsx:** Muestra el puntaje nutricional de la receta.
- **RecipeHistory.jsx:** Componente para mostrar el historial de recetas guardadas.
  - **RecipeCard.jsx:** Tarjetas individuales con la información de cada receta guardada.

## Funcionalidades

- **Página Principal (Home.jsx):** 
  - Muestra la introducción al proyecto y un botón para acceder a la creación de recetas.
  
- **Crear Receta (CreateRecipe.jsx):**
  - Permite al usuario seleccionar ingredientes de una lista interactiva.
  - Los ingredientes seleccionados pueden arrastrarse al panel para ajustarse y cambiar sus cantidades.
  - El puntaje nutricional se calcula dinámicamente y se muestra al usuario en tiempo real.

- **Historial de Recetas (RecipeHistory.jsx):**
  - Muestra todas las recetas guardadas en el `localStorage`.
  - Permite eliminar o ver los detalles de cada receta.
