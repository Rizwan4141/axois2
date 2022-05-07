import React, { useEffect, useState } from "react";

function Fatch1() {
  const [users, setUser] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((result) => result.json())
      .then((resp) => {
        console.warn(resp);
        setUser(resp);
      });
  }, []);
  console.warn("Data===>", users);
  return (
    <div className="App">
      <h1>Get API Call </h1>
      <table border="1">
        <tbody>
          <tr>
            <td>ID</td>
            <td>Category</td>
            <td>Price</td>
            <td>Title</td>
          </tr>
          {users.map((item, i) => (
            <tr key={i}>
              <td>{item.id}</td>
              <td>{item.category}</td>
              <td>{item.price}</td>
              <td>{item.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Fatch1;
