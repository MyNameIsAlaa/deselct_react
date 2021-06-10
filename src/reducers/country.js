import {
    RETRIEVE_COUNTRIES
  } from "../actions/types";
  
  const initialState = [
  ];



function countriesReducer(countries = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
  
      case RETRIEVE_COUNTRIES:
        return payload;
  

      default:
        return countries;
    }
  };
  
  export default countriesReducer;