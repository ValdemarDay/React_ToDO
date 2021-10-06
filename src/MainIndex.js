import { useState } from "react";

const MainIndex = () => {
    const [text, setText] = useState("");
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState("Active");
    const [value, setValue] = useState("");
    console.log(filter);

    const todoDiv = "todo-div";

    const handleSubmit = (e) => {
        e.preventDefault();
        setTodos((prevValue) => [
            ...prevValue,
            { title: text, status: "Active" },
        ]);
        setText("");
    };
    const handleChange = (e) => {
        setText(e.target.value);
    };
    const ToggleClass = (id) => {
        setTodos(
            todos.map((todo, index) => {
                if (id === index) {
                    return { ...todo, status: "Complete" };
                }
                return todo;
            })
        );
    };

    const removeItem = (id) => {
        setTodos((prevState) =>
            prevState.filter((a, index) => {
                return index !== id;
            })
        );
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="header">
                    <div className="header_logo">
                        <label>Add todo:</label>
                    </div>
                    <input
                        type="text"
                        required
                        placeholder="Add your todo..."
                        value={text}
                        onChange={handleChange}
                    ></input>
                    <input type="submit" value="+"></input>
                    <select
                        className="todo-select"
                        onChange={(e) => setFilter(e.target.value)}
                        value={filter}
                    >
                        <option value="Active">Active</option>
                        <option value="All">All</option>
                        <option value="Complete">Complete</option>
                    </select>
                </div>
            </form>
            <div className="main-container">
                {todos
                    .filter((todo) => {
                        return todo.title
                            .toLowerCase()
                            .includes(value.toLowerCase());
                    })
                    .map(
                        (todo, index) =>
                            (todo.status === filter || filter === "All") && (
                                <div
                                    key={index}
                                    className={todo.status + " " + todoDiv}
                                >
                                    <div className="todo_text">
                                        {todo.title}
                                    </div>
                                    <div>
                                        <button
                                            onClick={() => {
                                                ToggleClass(index);
                                            }}
                                            className="todo-complete"
                                        >
                                            ✓
                                        </button>
                                        <button
                                            className="todo-delete"
                                            onClick={() => {
                                                removeItem(index);
                                            }}
                                        >
                                            ✘
                                        </button>
                                    </div>
                                </div>
                            )
                    )}
            </div>
            <div className="search_todo">
                <input
                    type="text"
                    value={value}
                    className="search"
                    placeholder="Search your todo..."
                    onChange={(e) => setValue(e.target.value)}
                ></input>
            </div>
        </div>
    );
};

export default MainIndex;
