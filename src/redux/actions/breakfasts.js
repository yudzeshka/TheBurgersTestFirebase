import axios from "axios";

export const fetchBreakfasts = (API) => (dispatch) => {
  axios.get(`${API}/Breakfasts`).then(({ data }) => {
    dispatch(setBreakfasts(data));
  });
};

export const setBreakfasts = (items) => ({
  type: "SET_BREAKFASTS",
  payload: items,
});
