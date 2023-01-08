import React from "react";
import "./DataTable.css";
const DataTable = ({ tableHead, data }) => {
  return (
    <div className="DataTable">
      <div className="table-head">
        <ul>
          {tableHead.map((item) => (
            <li key={Math.random().toString(26)}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="table-body">
        {data.map((item, indexRow) => (
          <div key={Math.random().toString(26)} className="table-row">
            <ul>
              {Object.values(item).map((value, indexCol) => {
                return indexCol === 0 ? (
                  <li key={Math.random().toString(26)}>
                    {`${indexRow + 1}. ${value}`}
                  </li>
                ) : (
                  <li key={Math.random().toString(26)}>{value}</li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataTable;
