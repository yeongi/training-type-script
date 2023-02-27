import React, { useState } from "react";
import Todo from "../models/todo";

type TodosContextObj = {
  items: Todo[];
  addTodos: (text: string) => void;
  removeTodo: (item: Todo) => void;
};

export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodos: () => {},
  removeTodo: (item: Todo) => {},
});

const TodosContextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    const newTodo = new Todo(text);

    setTodos((prev) => {
      return prev.concat(newTodo);
    });
  };

  const deleteTodoHandler = (item: Todo) => {
    todos.find((element, index) => {
      if (element.id === item.id) {
        setTodos((prev) => {
          prev.splice(index, 1);
          return [...prev];
        });
      }
    });
  };

  const contextValue: TodosContextObj = {
    items: todos,
    addTodos: addTodoHandler,
    removeTodo: deleteTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
