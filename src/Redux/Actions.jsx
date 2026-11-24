export const ADD_POTION = "ADD_POTION";
export const DELETE_POTION = "DELETE_POTION";
export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";
export const RESET_POTIONS = "RESET_POTIONS";

export const addPotion = (potion) => ({ type: ADD_POTION, payload: potion });
export const deletePotion = (id) => ({ type: DELETE_POTION, payload: id });
export const toggleFavorite = (id) => ({ type: TOGGLE_FAVORITE, payload: id });
export const resetPotions = () => ({ type: RESET_POTIONS });
