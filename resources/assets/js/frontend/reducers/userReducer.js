
const initialState = {
    listUser: []
};

export default (state = initialState, action) => {
    switch(action.type){
        case "EXAMPLE":
            return {
                ...state,
                listUser
            };
        default:
            return state;
    }
}