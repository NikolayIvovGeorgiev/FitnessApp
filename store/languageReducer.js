
const initialState = {
  language: 'en', // Default language is English
};
 
const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LANGUAGE':
      return {
      ...state,
        language: action.payload,
      };
    default:
      return state;
  }
};

export default languageReducer;