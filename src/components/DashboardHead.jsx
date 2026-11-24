import { useSelector } from "react-redux";

const DashboardHead = () => {
  const potions = useSelector((state) => state);
  const nbFavorites = potions.filter((p) => p.favorite).length;
  const totalValue = potions.reduce((sum, p) => sum + p.price, 0);
  const totalGold = totalValue;
  const nbLegendary = potions.filter((p) => p.rarity === "legendaire").length;

  return (
    <section className="dashboard-section">
      <div className="dashboard-grid">
        <div className="stat-card stat-favorites">
          <div className="stat-icon">⭐</div>
          <div className="stat-value">{nbFavorites}</div>
          <div className="stat-label">Potions favorites</div>
        </div>

        <div className="stat-card stat-value-total">
          <div className="stat-icon">💰</div>
          <div className="stat-value">{totalValue}</div>
          <div className="stat-label">Valeur totale des potions</div>
        </div>

        <div className="stat-card stat-gold">
          <div className="stat-icon">🪙</div>
          <div className="stat-value">{totalGold}</div>
          <div className="stat-label">Total pièces d'or</div>
        </div>

        <div className="stat-card stat-legendary">
          <div className="stat-icon">🐉</div>
          <div className="stat-value">{nbLegendary}</div>
          <div className="stat-label">Potions légendaires</div>
        </div>
      </div>
    </section>
  );
};

export default DashboardHead;
