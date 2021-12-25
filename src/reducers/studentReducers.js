export const studentState = {
    students: []
};

export const studentReducer = (state, action) => {
    switch(action.type){
        case 'ADD_STUDENT':
            return state;
        case 'REMOVE_STUDENT':
            return state;
        default:
            return state;
    }
}