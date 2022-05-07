import React, { useEffect, useState } from "react";

const Fatch = () => {
  const [data, setData] = useState([]);
  //   const apiGet = () => {
  useEffect(() => {
    Fatch("https://api.github.com/users/defunkt").then((result) => {
      result.json().then((resp) => {
          console.warn("===>",resp);
        setData(resp);
      });
    });
  }, []);
//   console.warn("data===>",data);
  return (
    <div>
      <h1>Hiii</h1>
      {/* <button onClick={apiGet}> click</button> */}
    </div>
  );
};
// };

export default Fatch;
