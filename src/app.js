import React from "react";
import Todo from "./component/todo";
import TodoList from "./component/todo-list";
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
