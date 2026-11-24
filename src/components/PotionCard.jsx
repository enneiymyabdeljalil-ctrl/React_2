import { useSelector, useDispatch } from "react-redux";
import { deletePotion, toggleFavorite } from "../Redux/Actions.jsx";

const CardPotion = ({ category, search, sort }) => {
  const dispatch = useDispatch();
  const potions = useSelector((state) => state);

  const filtered = potions
    .filter((p) => (category === 'all' || p.category === category))
    .filter((p) => p.name.toLowerCase().includes((search || '').toLowerCase()))
    .sort((a, b) => {
      if (sort === 'asc') return a.price - b.price;
      if (sort === 'desc') return b.price - a.price;
      return 0;
    });

  return (
    <section className="potions-list">
      {filtered.map((potion) => (
        <article key={potion.id} className={`potion-card ${potion.rarity}`}>
          <div className="potion-card-header">
            <span className="potion-icon-card">🧪</span>
            <h3 className="potion-name">{potion.name}</h3>
            <button
              className={`favorite-btn ${potion.favorite ? 'active' : ''}`}
              onClick={() => dispatch(toggleFavorite(potion.id))}
            >
              {potion.favorite ? '❤️' : '🤍'}
            </button>
          </div>

          <div className="potion-card-body">
            <p className="potion-category">
              <strong>Catégorie :</strong> <span>{potion.category}</span>
            </p>
            <p className="potion-rarity">
              <strong>Rareté :</strong> <span>{potion.rarity}</span>
            </p>
            <p className="potion-price">
              <strong>Prix :</strong> <span>{potion.price} 💰</span>
            </p>
          </div>

          <div className="potion-card-footer">
            <button
              className="btn-delete"
              onClick={() => dispatch(deletePotion(potion.id))}
            >
              🗑️ Supprimer
            </button>
          </div>
        </article>
      ))}
    </section>
  );
};

export default CardPotion;
