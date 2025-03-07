import React from 'react'
import TodoItem from './TodoItem';
const Todos = (props) => {
    let myStyle={
        minHeight:"70vh",
        margin:"40px auto"
    }
    return (
        <div className="container" style={myStyle}>
            <h3 className="my-3">Todos List</h3>
            {props.todos.length === 0 ? "There are no more Todos present" :
                props.todos.map((todo) => {
                    return(
                        <>
                        <TodoItem todo={todo} key={todo.sn} onDelete={props.onDelete} />
                        <hr/>
                        </>
                    )
                })
            }
        </div>
    )
}
export default Todos
