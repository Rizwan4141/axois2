import React, { useEffect, useState } from "react";

const Search = () => {
  const empData = [
    { name: "Rizwan", age: "22", city: "Nanded" },
    { name: "Khadar", age: "24", city: "Nanded" },
    { name: "Sohel", age: "26", city: "Pune" },
    { name: "Vazir", age: "23", city: "Hydrabad" },
    { name: "Syed", age: "22", city: "Mumbai" },
  ];

  const [data, setData] = useState(empData);
  //   console.log("check the data", data);
  const [flitered, setFiltered] = useState("");
  useEffect(() => {
    setData()
  }, []);
  return (
    <div>
      <h1>Search box</h1>
      <input type="text" placeholder="Search" />
      {data.map((item) => {
        return (    
          <div style={{ border: "solid 2px" }}>
            <h3>{item.name}</h3>
            <h3>{item.city}</h3>
            <h3>{item.age}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Search;
