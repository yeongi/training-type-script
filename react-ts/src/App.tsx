import "./App.css";
import Todos from "./components/Todos";

function App() {
  return (
    <div>
      <Todos items={["a", "b", "c", "d"]} />
    </div>
  );
}

export default App;
