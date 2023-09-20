const TodoItem = () => {
    return (
        <section className="bg-light rounded mb-2 py-2 px-3">
            <div class="form-check">
                <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                    Default checkbox
                </label>
            </div>
        </section>
    );
};

export default TodoItem;
