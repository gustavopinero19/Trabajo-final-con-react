# Proyecto Final React UTN - Front-End: **Cocinando tu Receta**

Este es el proyecto final del curso de Programación Web Full Stack en la UTN. La aplicación **Cocinando tu Receta** permite a los usuarios crear recetas personalizadas, seleccionando ingredientes de una lista, ajustando las cantidades y obteniendo un "puntaje nutricional" en tiempo real basado en los ingredientes elegidos.

## Descripción

**Cocinando tu Receta** es una aplicación que permite a los usuarios crear recetas personalizadas, gestionar ingredientes seleccionados y obtener un puntaje nutricional en tiempo real. Los usuarios pueden ver un historial de recetas guardadas en localStorage y ajustar los ingredientes seleccionados según sus preferencias.

## Características Clave

- **Página Principal:**
  - Introducción con un botón para "Crear receta".
  
- **Panel de Creación:**
  - Lista interactiva de ingredientes con categorías (proteínas, carbohidratos, vegetales, etc.).
  - Panel para arrastrar y soltar ingredientes.
  - Campo para nombrar la receta.
  - Puntaje nutricional calculado dinámicamente usando `useEffect` y `useState`.
  
- **Historial de Recetas:**
  - Permite guardar las recetas creadas en `localStorage` y ver una lista de ellas.

## Estructura de la Aplicación (Sin React Router)

La navegación se maneja mediante estados locales en el componente principal (`App.jsx`), sin usar React Router.

### Diagrama Jerárquico Simplificado

1. **App.jsx (Componente raíz):**
   - Maneja los estados de la vista actual (`home`, `create-recipe`, `recipe-history`).
   - Renderiza la vista correspondiente según el estado.
   - Administra la lista global de recetas guardadas.

2. **Componentes hijos:**
   - **Home.jsx:** Introducción y navegación a "Crear Receta".
   - **CreateRecipe.jsx:**
     - **IngredientList.jsx:** Lista interactiva de ingredientes disponibles.
     - **RecipeBuilder.jsx:** Panel para ajustar ingredientes seleccionados.
     - **RecipeSummary.jsx:** Muestra el puntaje nutricional y el resumen de la receta.
   - **RecipeHistory.jsx:** Muestra las recetas guardadas.
     - **RecipeCard.jsx:** Tarjeta individual para cada receta.

## Funcionalidades y Estados

### Estados (useState)

- **Vista actual:** `home`, `create-recipe`, `recipe-history`.
- **Crear Receta:**
  - Lista de ingredientes seleccionados.
  - Cantidades ajustadas de los ingredientes.
  - Nombre de la receta.
  - Puntaje nutricional calculado.
- **Historial de Recetas:**
  - Lista de recetas guardadas.

### Efectos (useEffect)

- **Actualizar puntaje nutricional:** Se calcula dinámicamente cuando cambian los ingredientes seleccionados o sus cantidades.
- **Guardar y cargar recetas:** Las recetas se guardan en `localStorage` y se cargan al reiniciar la aplicación.

## Funcionalidad de Cada Sección

1. **Página Principal (Home.jsx):**
   - Introducción breve de la aplicación.
   - Botón para iniciar el proceso de creación de recetas.
   - Cambia el estado de la vista a "create-recipe" al hacer clic.

2. **Crear Receta (CreateRecipe.jsx):**
   - Permite seleccionar ingredientes y ajustar las cantidades.
   - Muestra el puntaje nutricional en tiempo real.
   - Guarda la receta en `localStorage`.
   - Componentes secundarios:
     - **IngredientList.jsx:** Lista interactiva de ingredientes clasificados.
     - **RecipeBuilder.jsx:** Panel para ajustar ingredientes seleccionados.
     - **RecipeSummary.jsx:** Muestra el puntaje nutricional.

3. **Historial de Recetas (RecipeHistory.jsx):**
   - Muestra las recetas guardadas.
   - Permite eliminar recetas o ver sus detalles.
   - Componentes secundarios:
     - **RecipeCard.jsx:** Muestra los detalles de cada receta y permite acciones como eliminar.

## Personalización y Estilo

- **API de Ingredientes:** Se puede integrar una API de ingredientes, como Edamam, para enriquecer la experiencia con datos reales.
- **Estilo:** El proyecto utiliza **CSS** o **Tailwind CSS** para la personalización visual.

## Flujo de Datos y Uso de Estados

1. **Estado Principal (App.jsx):**
   - Maneja la vista actual (Home, Crear Receta, Historial).
   - Administra las recetas guardadas.

2. **Estados Específicos (CreateRecipe.jsx):**
   - Ingredientes seleccionados, cantidades ajustadas, y puntaje nutricional.

3. **Comunicación entre Componentes:**
   - Uso de **props** para pasar datos de padres a hijos.
   - Eventos para actualizar estados en el componente padre.

## Instrucciones para la Entrega del Proyecto Final

### Fecha de Entrega Obligatoria
- 🗓 5 de enero de 2024 (hasta las 23:59 hrs).
- 🗓 Fecha de Recuperatorio: 10 de enero de 2024 (hasta las 23:59 hrs).

### Requisitos del Proyecto

1. **Repositorio en GitHub:**
   - Subir el proyecto en un repositorio público.
   - Incluir el archivo `package.json` con las dependencias necesarias.
   - Enviar el link del repositorio.

2. **Despliegue en Vercel:**
   - Deployar la aplicación en Vercel y enviar el link.

3. **Estructura y Funcionalidad:**
   - Evaluación de componentes, uso de props, hooks (`useState`, `useEffect`), y manejo de estados globales.
   - La funcionalidad debe cumplir con las especificaciones.

## Instalación

Para instalar y ejecutar este proyecto en tu entorno local, sigue estos pasos:

1. Clona este repositorio:
   ```bash
   git clone <URL-del-repositorio>
Navega a la carpeta del proyecto:

bash
Copiar código
cd trabajo-final-react
Instala las dependencias:

bash
Copiar código
npm install
Inicia el servidor de desarrollo:

bash
Copiar código
npm start
Esto abrirá la aplicación en tu navegador predeterminado, generalmente en http://localhost:3000.

Contribuciones
Si deseas contribuir a este proyecto, siéntete libre de hacer un fork, crear un branch y enviar un pull request.

Licencia
Este proyecto está bajo la Licencia ISC. Para más detalles, revisa el archivo LICENSE.

perl
Copiar código

Este `README.md` cubre todas las funcionalidades y requisitos mencionados en las consignas del proyecto. Puedes personalizar el contenido según lo que necesites, como el enlace de tu repositorio o detalles adicionales sobre la implementación. 

Si necesitas algún ajuste o algo más, no dudes en decírmelo. ¡Buena suerte con la entrega de tu proyecto!





