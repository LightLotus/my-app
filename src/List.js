import React, { useState, useEffect } from "react";
import axios from "axios";
import "./List.css";

const List = () => {
  const [infos, setInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://api.spacexdata.com/v5/launches/`).then((res) => {
      if (res.status === 200) {
        setInfo(res.data);
        setLoading(false);
        console.log(res.data);
      }
    });
  }, []);

  if (loading) {
    <h4>Loading...</h4>;
  } else {
    var load_data = "";
    load_data = infos.map((item, index) => {
      return (
        <div className="items-container" key={index}>
          <h1>
            <span>{item.flight_number}</span>&emsp;
            {item.name}
          </h1>
          <p>Details: &emsp; {item.details}</p>
        </div>
      );
    });
  }

  return (
    <div className="container">
      <input
        className="input-search"
        type="text"
        placeholder="Enter Keywords"
      />
      <div>{load_data}</div>
    </div>
  );
};

export default List;
