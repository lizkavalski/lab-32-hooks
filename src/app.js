import React from 'react';
import Todo from './todo.js';
import TodoList from './todo-list.js';
import Shopping from './shopping.js';
//mport useForm from './hooks/hooks.js';

import './app.scss';
;

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
