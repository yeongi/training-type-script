import React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

const Todos: React.FC<{ items: Todo[]; onDelete: (item: Todo) => void }> = (
  props
) => {
  return (
    <>
      <ul className={classes.todos}>
        {props.items.map((item) => {
          const deleteEvent = (event: React.MouseEvent) => {
            props.onDelete(item);
          };
          return (
            <TodoItem key={item.id} text={item.text} onClick={deleteEvent} />
          );
        })}
      </ul>
    </>
  );
};

export default Todos;
