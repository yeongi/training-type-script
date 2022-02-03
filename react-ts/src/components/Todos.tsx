import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";
import { TodosContext } from "../store/todos-context";

const Todos: React.FC = (props) => {
  const todosCtx = useContext(TodosContext);
  return (
    <>
      <ul className={classes.todos}>
        {todosCtx.items.map((e) => {
          return (
            <TodoItem
              key={e.id}
              text={e.text}
              onClick={todosCtx.removeTodo.bind(null, e)}
            />
          );
        })}
      </ul>
    </>
  );
};

export default Todos;
