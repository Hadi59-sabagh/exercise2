import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";


const UserList = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setUsers(response.data);
    });
  }, []);

  const addUser = () => {
    if (name && email) {
      setUsers([...users, { id: users.length + 1, name, email }]);
      setName("");
      setEmail("");
    }
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div>
      <h2>لیست کاربران</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
            <button onClick={() => deleteUser(user.id)}>حذف</button>
          </li>
        ))}
      </ul>
      <h3>افزودن کاربر</h3>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="نام" />
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="ایمیل" />
      <button onClick={addUser}>افزودن</button>
    </div>
  );
};

export default UserList;