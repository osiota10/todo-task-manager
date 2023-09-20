import TodoItem from "./components/todoItem";

function App() {
  return (
    <div className="min-vh-100 py-5 gradient-custom">
      <section className="container bg-white p-5 rounded">
        <form class="d-flex justify-content-center align-items-center mb-5">
          <div class="form-outline flex-fill">
            <input type="text" id="form2" class="form-control" placeholder="New Task..." />
          </div>
          <button type="submit" class="btn btn-info ms-2">Add</button>
        </form>

        <ul class="nav nav-pills mb-4">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">All</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Active</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Completed</a>
          </li>
        </ul>

        <section className="row row-cols-1 row-cols-lg-1 g-6">
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
        </section>
      </section>
    </div>
  );
}

export default App;
