import "./App.css";
import { React, useEffect, useState } from "react";
import axios from "axios";
const url = "https://jsonplaceholder.typicode.com/todos";
function App() {
  // using state to re-render the components once the API call happened
  // const [apiData, setApiData] = useState([]);
  const [count, setCount] = useState(0);

  // useEffect is used to execute the callback func after the component renders

  // useEffect(() => {
  //   fetch(url)
  //     .then((resp) => resp.json())
  //     .then((data) => {
  //       setApiData(data); // assigning value to the state then it will trigger the component to re-render
  //     })
  //     .catch((e) => console.log(e));
  // }, []);

  const getData = () => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    // calling API service
    // getData();
    axios
      .get(url)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, [count]);
  // Added comments
  // at first the component doesn't have the value hence it will return undefined;
  // Once the component renders then the useEffect will be executed then the data will be displayed

  // eventhough we added state to re-render the component, at first rendering the apidata will be empty hence it will return undefined.
  // to avoid this we can go with ? - if the userId is present then render, else leave it.
  return (
    <div>
      {/* {apiData[0]?.userId} */}
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <h1>{count}</h1>
    </div>
  );
}

export default App;
