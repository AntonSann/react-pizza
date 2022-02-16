const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);

const cart = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PIZZA_CART": {
      const currentPizzaItems = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];

      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentPizzaItems,
          totalPrice: getTotalPrice(currentPizzaItems),
        },
      };
      const items = Object.values(newItems).map((obj) => obj.items);
      const totalCount = items.flat(Infinity).length;
      const totalPrice = getTotalPrice(items.flat(Infinity));
      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      };
    }
    case "CLEAR_CART":
      return {
        items: {},
        totalPrice: 0,
        totalCount: 0,
      };
    case "REMOVE_CART_ITEM":
      const newItems = {
        ...state.items,
      };

      const currentTotalPrice = newItems[action.payload].totalPrice;
      const currentTotalCount = newItems[action.payload].items.length;
      delete newItems[action.payload];

      return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice - currentTotalPrice,
        totalCount: state.totalCount - currentTotalCount,
      };
    case "PLUS_CART_ITEM": {
      const plusItems = [
        ...state.items[action.payload].items,
        state.items[action.payload].items[0],
      ];

      const totalCount = plusItems.flat(Infinity).length;
      const totalPrice = getTotalPrice(plusItems.flat(Infinity));
      return {
        ...state,
        items: {
          ...state.items,
          [action.payload]: {
            items: plusItems,
            totalPrice: getTotalPrice(plusItems),
          },
        },
        totalPrice,
        totalCount,
      };
    }
    case "MINUS_CART_ITEM": {
      const oldItems = state.items[action.payload].items;
      const minusItems =
        oldItems.length > 1
          ? [...state.items[action.payload].items].slice(1)
          : oldItems;

      const totalCount = minusItems.flat(Infinity).length;
      const totalPrice = getTotalPrice(minusItems.flat(Infinity));

      return {
        ...state,
        items: {
          ...state.items,
          [action.payload]: {
            items: minusItems,
            totalPrice: getTotalPrice(minusItems),
          },
        },
        totalCount,
        totalPrice,
      };
    }
    default:
      return state;
  }
};

export default cart;
