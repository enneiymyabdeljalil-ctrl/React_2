import { useDispatch } from "react-redux";
import { resetPotions } from "../Redux/Actions.jsx";

const ResetPotion = () => {
  const dispatch = useDispatch();
  return (
    <section className="reset-potion-section">
      <div className="reset-card">
        <div className="reset-icon">🔄</div>
        <h2 className="section-title">Réinitialiser l'atelier</h2>
        <p className="reset-description">
          Restaure l'état initial de l'atelier : les 3 potions de départ,
          l'inventaire d'ingrédients complet, les filtres et le formulaire.
        </p>
        <button className="btn-reset" onClick={() => dispatch(resetPotions())}>
          Réinitialiser l'atelier
        </button>
      </div>
    </section>
  );
};

export default ResetPotion;
