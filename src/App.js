import "./App.css";
import React from "react";

const data = [
  {
    name: "Tiger Nixon",
    position: "System architect",
    office: "Edinburgh",
    age: 61,
    start_date: "2011/04/25",
    salary: 320000
  },
  {
    name: "Garrett Winters",
    position: "Accountant",
    office: "Tokyo",
    age: 63,
    start_date: "2011/07/25",
    salary: 320000
  },
  {
    name: "Tiger Nixon",
    position: "System architect",
    office: "Edinburgh",
    age: 61,
    start_date: "2011/04/25",
    salary: 320000
  }
];

function App() {
  return (
    <div className="App">
      <table>
        <tr>
          <th>Name</th>
          <th>Position</th>
          <th>Office</th>
          <th>Age</th>
          <th>Start date</th>
          <th>Salary</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.name}</td>
              <td>{val.position}</td>
              <td>{val.office}</td>
              <td>{val.age}</td>
              <td>{val.start_date}</td>
              <td>{"$" + val.salary}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default App;
