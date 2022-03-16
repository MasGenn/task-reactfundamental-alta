import TodoPage from "./pages/Todo/TodoPage";
import { useState } from "react";
// data
import { task } from "./mockData";

function App() {
  return <TodoPage tasks={task} />;
}

export default App;
