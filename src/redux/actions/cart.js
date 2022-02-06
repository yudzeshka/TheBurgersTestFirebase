export const setCart = (items) => ({
  type: "SET_CART",
  payload: items,
});

export const addDishToCart = (Obj) => ({
  type: "ADD_DISH",
  payload: Obj,
});

export const deleteDishFromCart = (id) => ({
  type: "DELETE_DISH",
  payload: id,
});

export const addOnePiece = (id) => ({
  type: "ADD_ONE",
  payload: id,
});

export const removeOnePiece = (id) => ({
  type: "REMOVE_ONE",
  payload: id,
});
