import { useState } from "react";

const TodoItem = ({ id, task, is_completed, onToggleCompletion, onDelete }) => {
    const handleCheckboxClick = () => {
        onToggleCompletion(id); // Toggle the completed state
    };

    const handleTodoDelete = () => {
        onDelete(id);
    };
    return (
        <section className="bg-light rounded mb-2 py-3 px-3" key={id}>
            <div className="form-check d-flex justify-content-between">
                <section>
                    <input
                        className="form-check-input"
                        type="checkbox"
                        defaultChecked={is_completed}
                        onChange={handleCheckboxClick} // Use onChange instead of onClick
                        id={`flexCheckDefault${id}`} // Use a unique ID for each checkbox
                    />
                    <label
                        class={`form-check-label ${
                            is_completed ? "text-decoration-line-through" : null
                        }`}
                        for="flexCheckDefault"
                    >
                        {task}
                        <span
                            className={`ms-3 badge text-bg-${
                                is_completed ? "primary" : "secondary"
                            }`}
                        >
                            {is_completed ? "Completed" : "Pending"}
                        </span>
                    </label>
                </section>

                <span onClick={handleTodoDelete}>Delete</span>
            </div>
        </section>
    );
};

export default TodoItem;
