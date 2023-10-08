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
                <label class="form-check-label" for="flexCheckDefault">
                    {task}
                </label>
            </div>
        </section>
    );
};

export default TodoItem;
