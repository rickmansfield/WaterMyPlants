import {
    ADD_PLANT,
    NEW_USER,
    EDIT_PLANT,
    LOGIN,
    GET_PLANT,
  } from '../actions/index';

const initialState = {
    user: {
        username:'',
        password:'',
        phone:''
    },
    plant: {
        id: null,
        nickname: '',
        species: '',
        h2oFrequency: '',
        image: ''
    },
    plantList: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLANT:
            return {
                ...state,
                item: action.payload,
            };

        case NEW_USER:
            return {
                ...state,
                user: action.payload,
            };

        case GET_PLANT:
            return {
                ...state,
                equipment: [action.payload],
            };

        case EDIT_PLANT:
            const editItem = state.item.find((item) => item.id === action.payload);
            return {
                ...state,
                item: editItem,
            };

        case LOGIN:
            return {
                ...state,
                user: action.payload,
            };

        default:
            return state;
    }
};
      


export default reducer;