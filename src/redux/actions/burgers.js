import axios from "axios";

export const fetchBurgers = (API) => (dispatch) => {
  axios.get(`${API}/Burgers`).then(({ data }) => {
    dispatch(setBurgers(data));
  });
};

export const setBurgers = (items) => ({
  type: "SET_BURGERS",
  payload: items,
});
