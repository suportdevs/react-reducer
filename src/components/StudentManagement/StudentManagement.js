import React, { useReducer } from 'react';
import { studentReducer, studentState } from '../../reducers/studentReducers';

const StudentManagement = () => {
    const [state, dispatch] = useReducer(studentReducer, studentState);
    return (
        <div>
            <h1>Student Count: {state.students.length}</h1>
            
        </div>
    );
};

export default StudentManagement;