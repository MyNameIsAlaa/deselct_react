import {
    CREATE_USER,
    RETRIEVE_COUNTRIES,
    RETRIEVE_USERS,
  } from "./types";
  
  import UserSerivce from "../services/UserSerivce";
  
  export const createUser = (id, first_name, last_name, nationality, age) => async (dispatch) => {
    try {
      const res = await UserSerivce.create({ id, first_name, last_name, nationality, age });
  
      dispatch({
        type: CREATE_USER,
        payload: res.data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  
  export const retrieveUsers = () => async (dispatch) => {
    try {
      const res = await UserSerivce.getAll();
  
      dispatch({
        type: RETRIEVE_USERS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
  

  export const findByCountry = (country) => async(dispatch) =>{
      try {
          const res = await UserSerivce.findByCountry(country);
          dispatch({
              type: RETRIEVE_USERS,
              payload: res.data
          });
      } catch (error) {
          console.log(error)
      }
  }

  export const retrieveCountries = () => async (dispatch) => {
    try {
      const res = await UserSerivce.getCountries();
  
      dispatch({
        type: RETRIEVE_COUNTRIES,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
  

