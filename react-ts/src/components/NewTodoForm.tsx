import React, { useContext, useRef } from "react";
import { TodosContext } from "../store/todos-context";
import classes from "./NewTodoForm.module.css";

const NewTodoForm: React.FC = (props) => {
  const todosCtx = useContext(TodosContext);
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    //this value should not be null!!
    const enteredText: string = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    todosCtx.addTodos(enteredText);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label>할일 넣기 : </label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodoForm;
