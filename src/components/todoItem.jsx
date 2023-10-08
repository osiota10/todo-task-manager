import { useState } from "react";

const TodoItem = ({ id, task, is_completed }) => {
    const [completed, setCompleted] = useState(is_completed);

    const handleCheckboxClick = () => {
        setCompleted(!completed); // Toggle the completed state
    };
    return (
        <section className="bg-light rounded mb-2 py-3 px-3" key={id}>
            <div class="form-check">
                <input
                    class="form-check-input"
                    type="checkbox"
                    checked={completed}
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
            </div>
        </section>
    );
};

export default TodoItem;
