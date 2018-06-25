const initialState = {
    listUser: []
};

export default (state = initialState, action) => {
    switch(action.type){
        case "EXAMPLE":
            return 1;
        default:
            return state;
    }
}