// ============================================
// Fichier : src/Redux/Store.jsx
// TP7 - REDUX : Création du store Redux
// ============================================
// import potionReducer from './Reducer.jsx';  // À décommenter une fois le reducer écrit
// import potionReducer from './Reducer.jsx';

import { createStore } from "redux";
import ReducePotion from "./Reducer.jsx";
// ============================================
// À compléter par l'étudiant :
// Créer le store en lui associant le reducer, par exemple :
//   const store = createStore(potionReducer);
//   export default store;
const Store = createStore(ReducePotion);

export default Store;

// ============================================
