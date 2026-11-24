// ============================================
// Fichier : src/Redux/Reducer.jsx
// TP7 - REDUX : Reducer de l'atelier de potions
// ============================================
import { ADD_POTION, DELETE_POTION, TOGGLE_FAVORITE, RESET_POTIONS } from './Actions.jsx';

// État initial : les 3 potions de départ de l'atelier d'Astréa
const initialState = [
  { id: 1, name: "Potion de Soin Mineur", category: "soin", rarity: "commune", price: 50, favorite: true },
  { id: 2, name: "Élixir de Vision Arcane", category: "magie", rarity: "rare", price: 180, favorite: false },
  { id: 3, name: "Bouclier d'Astralée", category: "protection", rarity: "legendaire", price: 420, favorite: true },
];

const ReducePotion = (state = initialState,action) =>
  
  {
    switch (action.type)
    {
      case ADD_POTION :
        {
          return [...state,action.payload]
        }
        case DELETE_POTION :
          {
            return state.filter((_)=> _.id !== action.payload);
          }
case TOGGLE_FAVORITE :
          {
            return  state.map((Compar)=>
            Compar.id === action.payload
            ?{...Compar, favorite: !Compar.favorite}: Compar);
          }
        case RESET_POTIONS :
          {
            return initialState;
          }
          default :
          return state;
    }

  }
  export default ReducePotion;














// ============================================
// Reducer
// À compléter par l'étudiant :
// Écrire la fonction reducer qui gère :
//   - ADD_POTION   : ajouter une nouvelle potion à la liste
//   - DELETE_POTION : supprimer une potion par son id
//   - TOGGLE_FAVORITE : inverser la propriété favorite d'une potion
//   - RESET_POTIONS : restaurer l'état initial
// ============================================
// Exemple de structure (à adapter) :
// const potionReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_POTION:
//       return [...state, action.payload];
//     case DELETE_POTION:
//       return state.filter(potion => potion.id !== action.payload);
//     case TOGGLE_FAVORITE:
//       return state.map(potion =>
//         potion.id === action.payload ? { ...potion, favorite: !potion.favorite } : potion
//       );
//     case RESET_POTIONS:
//       return initialState;
//     default:
//       return state;
//   }
// };

// export default potionReducer;

// ============================================
// À COMPLÉTER PAR L'ÉTUDIANT
// ============================================
