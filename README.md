# React Memory Game

React Memory Game is an interactive card matching game built using the React framework. The game challenges your memory by allowing you to flip cards and find matching pairs. It uses the Emojihub API to dynamically fetch emoji images for the cards, making each game visually fun and engaging.

Players flip two cards at a time to find matching emoji pairs. The game tracks your moves and helps improve your concentration and memory skills through repeated play.

---

## Technologies Used

- **React** — Frontend framework for building a responsive and dynamic UI
- **Emojihub API** — To fetch a variety of emoji images for the cards dynamically
- **CSS** — For styling and responsive design

---

## Features

- Dynamic card images from Emojihub API
- Smooth card flip animations
- Move counter to track player's attempts
- Responsive design for desktop and mobile

---

## Available Scripts

In the project directory, run:

### `npm start`

Runs the app in development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.  
The page reloads on edits.

### `npm test`

Launches the test runner in interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.  
Optimizes for best performance.

---

## Project Structure

- `public/` — Static files including `index.html`
- `src/`
  - `index.js` — Entry point
  - `App.js` — Main app component
  - `App.css` — Styles
  - `components/MemoryGame.js` — Game logic and UI
  - `api/` — API utilities for fetching emoji images
  - `assets/` — Static assets if any

---

## Deployment

Deploy the contents of the `build` folder to any static hosting service.

---

## Learn More

- [React documentation](https://reactjs.org/)
- [Create React App docs](https://create-react-app.dev/docs/getting-started/)
- [Emojihub API](https://emojihub.herokuapp.com/)

---

## License

MIT License
