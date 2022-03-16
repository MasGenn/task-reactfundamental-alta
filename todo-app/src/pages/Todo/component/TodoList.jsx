import styles from "./TodoList.module.css";

export default function TodoList({ task }) {
  //   const task = {
  //     id: 1,
  //     title: "Membuat Komponen",
  //     completed: true,
  //   };
  return (
    <div>
      <p style={{ textDecoration: task.completed ? "line-through" : "" }} className={styles.tugas}>
        {task.title}
      </p>
    </div>
  );
}
