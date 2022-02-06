const initialState = {
  items: [],
  isLoaded: false,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CART":
      return {
        ...state,
        items: action.payload,
        isLoaded: true,
      };
    case "ADD_DISH":
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case "ADD_ONE":
      const newItemsWithAdd = [...state.items].map((item) => {
        if (item.id === action.payload) {
          item.amount++;
        }
        return item;
      });
      return {
        ...state,
        items: [...newItemsWithAdd],
      };
    case "REMOVE_ONE":
      const newItemsWithoutRemove = [...state.items].map((item) => {
        if (item.id === action.payload) {
          item.amount--;
        }
        return item;
      });
      return {
        ...state,
        items: [...newItemsWithoutRemove],
      };

    case "DELETE_DISH":
      return {
        ...state,
        items: [...state.items].filter(function (item) {
          return item.id !== action.payload;
        }),
      };
    default:
      return state;
  }
};

export default cartReducer;
