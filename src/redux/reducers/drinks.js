const initialState = {
  items: [],
  isLoaded: false,
};

const drinks = (state = initialState, action) => {
  if (action.type === "SET_DRINKS") {
    return {
      ...state,
      items: action.payload,
      isLoaded: true,
    };
  }
  return state;
};

export default drinks;
