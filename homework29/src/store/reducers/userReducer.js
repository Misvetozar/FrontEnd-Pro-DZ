import { ADD_USER, DELETE_USER, EDIT_USER, SET_USER } from "../actions/user";

ADD_USER

const INITIAL_STATE = {
    list: []
}

export default function userReducer (state = INITIAL_STATE, {type, payload}) {
    switch (type) {
        case DELETE_USER:
            return {
                ...state,
                list: state.list.filter((item) => payload !== item.id),
            };

        case ADD_USER: return {
            ...state,
            list: [...state.list, { id: Date.now(), ...payload }],
        };

        case SET_USER:
            return {
                ...state,
                list:payload,
            };

        case EDIT_USER:
            return {
                ...state,
                list: [...state.list.map((id) => payload === id)],
            }
        default : return state;
    }
}