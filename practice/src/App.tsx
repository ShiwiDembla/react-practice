import "./App.css";
import Counter from "./components/counter/counter";
import FilterableList from "./components/filterable_list/filterable_list";
import Greeting from "./components/greeting/greeting";
import TodoList from "./components/todo_list/todo_list";
import ToggleText from "./components/toggle_text/toggle_text";

function App() {
  return (
    <>
      <div className="card">
        <Greeting name="Shiwani" />
        <hr />
        <ToggleText />
        <hr />
        <Counter />
        <hr />
        <TodoList />
        <hr />
        <FilterableList />
      </div>
    </>
  );
}

export default App;
