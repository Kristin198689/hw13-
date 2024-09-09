import React from "react";
import styles from "../styles/UserItem.module.css";

// Путь к стилям

const UserItem = ({ user }) => {
  return <li className={styles.userItem}>{user}</li>;
};

export default UserItem;
