import React from "react";
import Filter from "./components/Filter";
import UserList from "./components/UserList";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.appContainer}>
      <h1>Фильтрация пользователей</h1>
      <Filter />
      <UserList />
    </div>
  );
}

export default App;
