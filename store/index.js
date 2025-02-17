import { configureStore } from '@reduxjs/toolkit';
import FirstReducer from './FirstReducer';
import languageReducer from './languageReducer'

const store = configureStore({
reducer: {
    firstLoad: FirstReducer,
    language: languageReducer
}
});

export default store;

