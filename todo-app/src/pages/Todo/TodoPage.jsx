import Header from "./component/Header";
import TodoList from "./component/TodoList";

function TodoPage({ tasks }) {
  return (
    <>
      <Header />

      {tasks.map((task) => (
        <TodoList task={tasks} />
      ))}
    </>
  );
}

export default TodoPage;
