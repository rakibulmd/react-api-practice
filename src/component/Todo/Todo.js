import React from "react";
import "./Todo.css";

const Todo = (props) => {
    const { userId, id, title, completed } = props.data;
    return (
        <div className="task">
            <div className="task-name">
                <p className="user-id">
                    User id: {id}({userId})
                </p>
                <p>Task Name: {title}</p>
            </div>
            <p>Status: {completed === true ? "Completed" : "Incomplete"}</p>
        </div>
    );
};

export default Todo;
