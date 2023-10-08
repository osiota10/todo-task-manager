import TodoItem from "./components/todoItem";
import { useState } from "react";

function App() {
  const [todo, setTodo] = useState([
    { id: "1", task: "Buy groceries", is_completed: true, },
    { id: "2", task: "Clean the house", is_completed: false, },
    { id: "3", task: "Go for a walk", is_completed: true, },
  ])

  // Function to toggle the completion status of a todo item
  const toggleTodoCompletion = (id) => {
    // Create a copy of the todo array with the updated item
    const updatedTodo = todo.map((item) => {
      if (item.id === id) {
        return { ...item, is_completed: !item.is_completed };
      }
      return item;
    });

    // Update the state with the new todo array
    setTodo(updatedTodo);
  };

  const handleDeleteTodo = (id) => {
    // Filter out the todo item with the matching id to delete it
    const updatedTodo = todo.filter((item) => item.id !== id);
    setTodo(updatedTodo); // Update the todo state
  };

  const [filter, setFilter] = useState('All'); // State to track the active filter
  const [newTodo, setNewTodo] = useState('');

  // Function to handle filter change
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  // Function to filter todos based on the active filter
  const filteredTodos = todo.filter((item) => {
    if (filter === 'All') {
      return true;
    } else if (filter === 'Active') {
      return !item.is_completed;
    } else {
      return item.is_completed;
    }
  });

  const handleNewTodoChange = (event) => {
    setNewTodo(event.target.value); // Update the newTodo state with input value
  };

  const handleAddTodo = (event) => {
    event.preventDefault(); // Prevent form submission from reloading the page

    if (newTodo.trim() !== '') {
      // Add the new todo to the list if it's not empty
      setTodo([
        ...todo,
        {
          id: Math.random().toString(),
          task: newTodo,
          is_completed: false,
        },
      ]);
      setNewTodo(''); // Clear the input field after adding
    }
  };

  return (
    <div className="min-vh-100 py-5 gradient-custom">
      <section className="container bg-white p-5 rounded">
        <form
          className="d-flex justify-content-center align-items-center mb-5"
          onSubmit={handleAddTodo} // Handle form submission
        >
          <div className="form-outline flex-fill">
            <input
              type="text"
              id="form2"
              className="form-control"
              placeholder="New Task..."
              value={newTodo} // Bind input value to the newTodo state
              onChange={handleNewTodoChange} // Handle input change
            />
          </div>
          <button type="submit" className="btn btn-info ms-2">
            Add
          </button>
        </form>

        <ul className="nav nav-pills mb-4">
          <li className="nav-item">
            <button
              className={`nav-link ${filter === 'All' ? 'active' : ''}`}
              onClick={() => handleFilterChange('All')}
            >
              All
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${filter === 'Active' ? 'active' : ''}`}
              onClick={() => handleFilterChange('Active')}
            >
              Pending
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${filter === 'Completed' ? 'active' : ''}`}
              onClick={() => handleFilterChange('Completed')}
            >
              Completed
            </button>
          </li>
        </ul>

        <section className="row row-cols-1 row-cols-lg-1 g-6">
          {filteredTodos.length === 0 ? (
            <h2 className="text-center">No todos to display.</h2>
          ) : (
            filteredTodos.map((item) => (
              <TodoItem
                key={item.id}
                id={item.id}
                task={item.task}
                is_completed={item.is_completed}
                onToggleCompletion={toggleTodoCompletion}
                onDelete={handleDeleteTodo}
              />
            ))
          )}
        </section>
      </section>
    </div>
  );
}

export default App;
