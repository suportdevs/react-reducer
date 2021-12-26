export const studentState = {
    students: []
};

export const studentReducer = (state, action) => {
    switch(action.type){
        case 'ADD_STUDENT':
            const newStudent = {
                id: action.id,
                name: action.name
            }
            const allStudent = [...state.students, newStudent];
            return {students: allStudent};
        case 'REMOVE_STUDENT':
            const remaining = state.students.filter(student => student.id !== action.id);
            const newState = {students: remaining};
            return newState;
        default:
            return state;
    }
}