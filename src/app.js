import React from "react";
import Todo from "./todo";
import TodoList from "./todo-list";
// import Shopping from "./component/shopping";

import "./app.scss";

function App(props) {
  return (
    <>
      <h1>To do List</h1>
      <section>
        <div>
          <Todo />
        </div>
        <div>
          <TodoList />
        </div>
      </section>
    </>
  );
}

export default App;
