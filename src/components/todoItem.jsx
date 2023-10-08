const TodoItem = ({ id, task, is_completed }) => {
    return (
        <section className="bg-light rounded mb-2 py-3 px-3" key={id}>
            <div class="form-check">
                <input
                    class="form-check-input"
                    type="checkbox"
                    defaultChecked={is_completed}
                    id="flexCheckDefault"
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
