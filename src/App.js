import React from 'react';
import { useState, useEffect } from "react";
import './App.css';
import Page2 from './Page2'

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

function useFetch() {
  const [data, setData] = useState([]);
  
  async function fetchData() {
    await sleep(2000)
    setData([1,2,3]);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return [data];
}



function App() {
  const [data, loading] = useFetch()
  return (
    <div className="App">
      {data.map((val, key) => (
        <li key={key}>{val}</li>
      ))}
      <Page2 testdata={data} />
    </div>
  );
}

export default App;
