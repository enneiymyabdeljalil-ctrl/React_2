// ============================================
// Fichier : src/components/AddPotion.jsx
// Composant : AddPotion
// TP7 - REDUX : Formulaire d'enregistrement d'une nouvelle potion
// ============================================
// À compléter par l'étudiant :
// Importer React (useState) et useDispatch depuis react-redux
// Importer l'action addPotion depuis ../Redux/Actions.jsx


import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPotion } from "../Redux/Actions.jsx";

import "./AddPotion.css";

const AddPotion = () => {
  const dispatch = useDispatch();

  // Champs du formulaire
  const [name, setName] = useState("");
  const [cate, setCate] = useState("");
  const [rarity, setRarity] = useState("");
  const [prix, setPrix] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Vérification des champs
    if (!name || !cate || !rarity || prix === "") {
      setError(true);
      return;
    }

    setError(false);

    // Création d'une nouvelle potion
    const Potionnv = {
      id: Date.now(),
      name: name,
      category: cate,
      rarity: rarity,
      price: Number(prix),
      favorite: false
    };

    // Envoi de l'action au Redux Store
    dispatch(addPotion(Potionnv));

    // Vider le formulaire
    setName("");
    setCate("");
    setRarity("");
    setPrix("");
  };

  return (
    <div className="add-potion-card">
      <h2 className="add-potion-title">🧪 Ajouter une potion</h2>

      <form className="add-potion-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Nom :</label>
          <input
            className="form-input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Catégorie :</label>
          <select
            className="form-select"
            value={cate}
            onChange={(e) => setCate(e.target.value)}
          >
            <option value="">Choisir une catégorie</option>
            <option value="soin">Soin</option>
            <option value="magie">Magie</option>
            <option value="protection">Protection</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Rareté :</label>
          <select
            className="form-select"
            value={rarity}
            onChange={(e) => setRarity(e.target.value)}
          >
            <option value="">Choisir une rareté</option>
            <option value="commune">Commune</option>
            <option value="rare">Rare</option>
            <option value="legendaire">Légendaire</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Prix :</label>
          <input
            className="form-input"
            type="number"
            value={prix}
            onChange={(e) => setPrix(e.target.value)}
          />
        </div>

        {error && (
          <p className="form-error">
            Veuillez remplir tous les champs obligatoires !
          </p>
        )}

        <button className="btn-add-potion" type="submit" disabled={error}>
          Ajouter
        </button>
      </form>
   
    </div>
  );
};

export default AddPotion;
