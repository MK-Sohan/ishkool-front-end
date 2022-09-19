import React, { useEffect } from "react";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

const Fortest = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <CopyToClipboard text={data.map((val) => val.name)}>
        <button>copy</button>
      </CopyToClipboard>

      {data.map((val) => (
        <p>{val.details}</p>
      ))}
    </div>
  );
};

export default Fortest;
