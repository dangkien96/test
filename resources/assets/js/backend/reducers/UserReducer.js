import {TypeUserAction, UserActions} from '../actions/UserAction'

const initialState = {
    listUsers: [],
    actionType: "",
    status: false,
    infoUser: {},
    errors: {}
};

export default (state = initialState, action) => {
    switch(action.type){
        case TypeUserAction.INFO_ACTION_COMPELETE:
            return {...state, infoUser: action.params, errors: {}}

        case TypeUserAction.DELETE_ACTION_COMPELETE:
            return state
            
        case TypeUserAction.INSERT_ACTION_COMPELETE:
            return {...state,  actionType: TypeUserAction.INSERT_ACTION, status: action.status, 
                errors: action.errors}

        case TypeUserAction.LIST_ACTION_COMPELETE:
            return {...state, listUsers: action.params, actionType: TypeUserAction.LIST_ACTION}  

        case TypeUserAction.UPDATE_ACTION_COMPELETE:
            return {...state,  actionType: TypeUserAction.UPDATE_ACTION, status: action.status, 
                errors: action.errors}

        default:
            return state;
    }
}