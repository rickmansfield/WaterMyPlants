export const ADD_PLANT = 'ADD_PLANT';
export const NEW_USER = 'NEW_USER';
export const EDIT_PLANT = 'EDIT_PLANT';
export const LOGIN = 'LOGIN';
export const GET_PLANT = 'GET_PLANT';

export const add = (newPlant) => {
    return { type: ADD_PLANT, payload: newPlant };
  };
  
  export const getPlant = (plant) => {
    return { type: GET_PLANT, payload: plant };
  };
  
  export const newUser = (newUser) => {
    return { type: NEW_USER, payload: newUser };
  };
  
  export const edit = (edited) => {
    return { type: EDIT_PLANT, payload: edited };
  };
  
  export const login = (loginSuccess) => {
    return { type: LOGIN, payload: loginSuccess };
  };
  