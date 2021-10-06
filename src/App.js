import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import MainIndex from "./MainIndex";

function App() {
    return (
        <BrowserRouter>
            <div className="todo-container">
                <Route path="/" component={MainIndex} />
            </div>
        </BrowserRouter>
    );
}

export default App;
