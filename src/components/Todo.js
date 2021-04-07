import React from "react";
import styles from "../css/Todo.module.css";

const Todo = ({todo, index, markTodo, deleteTodo}) => {
  return(
    <div className="col-4">
      <div className="card text-center">
        <div className="card-header">
        <h4>Todo: {index + 1}</h4>
        </div>
        <div className="card-body">
          <h3 className={todo.done ? "complete" : "incomplete"}>{todo.msg}</h3>
        </div>
        <div className="card-footer">
        <button onClick={()=>{deleteTodo(index)}} className="btn btn-danger float-start">Delete</button>
        <button onClick={()=>{markTodo(index)}} className={styles.pink+ " btn-warning float-end"}>Mark</button>
        </div>
      </div>
    </div>
  )
}

export default Todo;
