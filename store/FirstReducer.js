const initialState = {
    isFirstLoad: true,
  };
  
  const FirstReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_FIRST_LOAD':
        return {
          ...state,
          isFirstLoad: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default FirstReducer;
  