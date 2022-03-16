import TodoPage from "./pages/Todo/TodoPage";

// data
import { task } from "./mockData";

function App() {
  return <TodoPage tasks={task} key={task.title} />;
}

export default App;
