const initialState = {
  items: [],
  isLoaded: false,
};

const breakfasts = (state = initialState, action) => {
  if (action.type === "SET_BREAKFASTS") {
    return {
      ...state,
      items: action.payload,
      isLoaded: true,
    };
  }
  return state;
};

export default breakfasts;
