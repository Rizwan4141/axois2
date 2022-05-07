import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const result = await axios.get("https://fakestoreapi.com/products");
    console.log(result.data);
    setData(result.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h1>Home</h1>
      {data.map((item) => {
        return (
          <div>
            <h1>ID:{item.id}</h1>
            <h1>ID:{item.title}</h1>
            <h1>Price:{item.price}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
