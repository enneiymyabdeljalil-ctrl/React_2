// ============================================
// Fichier : src/index.js
// TP7 - REDUX : Point d'entrée - Connexion au store Redux
// ============================================
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { Provider } from "react-redux";
import Store from "./Redux/Store";

// ============================================
// À compléter par l'étudiant :
// 1. Importer le store depuis './Redux/Store.jsx'
//    import store from './Redux/Store.jsx';
//
// 2. Importer Provider depuis 'react-redux'
//    import { Provider } from 'react-redux';
//
// 3. Envelopper le composant App avec <Provider store={store}>
//
// Exemple :
//
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>
// );
// ============================================

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

