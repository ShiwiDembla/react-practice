import "./App.css";
import Counter from "./components/counter/counter";
import Greeting from "./components/greeting/greeting";

function App() {
  return (
    <>
      <div className="card">
        <Greeting name="Shiwani" />
        <Counter />
      </div>
    </>
  );
}

export default App;
