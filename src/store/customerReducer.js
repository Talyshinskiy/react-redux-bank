const defaultCustomer = {
  customers: [],
};

const ADD_CUSTOMER = "ADD_CUSTOMER";
const REMOVE_CUSTOMERS = "REMOVE_CUSTOMERS";
const ADD_MANY_CUSTOMERS = "ADD_MANY_CUSTOMERS";

export const customerReducer = (state = defaultCustomer, action) => {
  switch (action.type) {
    case ADD_MANY_CUSTOMERS:
      return {...state, customers: [...state.customers, ...action.payload]}
    case ADD_CUSTOMER:
      return { ...state, customers: [...state.customers, action.payload] };
    case REMOVE_CUSTOMERS:
      return {
        ...state,
        customers: state.customers.filter(
          (customer) => customer.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
export const addCutomerAction = (payload) => ({ type: ADD_CUSTOMER, payload });
export const removeCutomerAction = (payload) => ({
  type: REMOVE_CUSTOMERS,
  payload,
});
export const addManyCutomersAction = (payload) => ({ type: ADD_MANY_CUSTOMERS, payload });

