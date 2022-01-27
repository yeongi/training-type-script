import { useState } from "react";
import "./App.css";
import NewTodoForm from "./components/NewTodoForm";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  // const todos = [
  //   new Todo("난 이제 뭘 해먹고 사나.."),
  //   new Todo("정말 이지 다이 어트는 힘 들 어 "),
  //   new Todo("뱃살 없애고 싶다. 야발"),
  //   new Todo("여자친구 사귀고 슆네.."),
  // ];

  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    const newTodo = new Todo(text);

    setTodos((prev) => {
      return prev.concat(newTodo);
    });
  };

  return (
    <div>
      <NewTodoForm onAddTodo={addTodoHandler} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
