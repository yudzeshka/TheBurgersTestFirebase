import axios from "axios";

export const fetchDrinks = (API) => (dispatch) => {
  axios.get(`${API}/Drinks`).then(({ data }) => dispatch(setDrinks(data)));
};

export const setDrinks = (items) => ({
  type: "SET_DRINKS",
  payload: items,
});
