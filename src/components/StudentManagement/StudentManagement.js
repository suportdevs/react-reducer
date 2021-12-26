import React, { useReducer, useRef } from 'react';
import { studentReducer, studentState } from '../../reducers/studentReducers';

const StudentManagement = () => {
    const nameRef = useRef();
    const [state, dispatch] = useReducer(studentReducer, studentState);
    const handleSubmit = e => {
        e.preventDefault();
        dispatch({
            type: "ADD_STUDENT",
            id: state.students.length + 1,
            name: nameRef.current.value,
        });
        console.log(nameRef.current.value);
        nameRef.current.value = "";
    }
    return (
        <div>
            <h1>Student Count: {state.students.length}</h1>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef} type="text" name="" id="" />
            </form>
            {
                state.students.map(student => <li 
                    key={student.id} 
                    onClick={() => dispatch({type: 'REMOVE_STUDENT', id: student.id})}
                    >{student.name}</li>)
            }
        </div>
    );
};

export default StudentManagement;