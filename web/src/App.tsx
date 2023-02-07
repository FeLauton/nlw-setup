import Habit from "./components/Habits";
import "./styles/global.css";

function App() {
  return <div className="App">{<Habit completed={3} />}</div>;
}

export default App;
