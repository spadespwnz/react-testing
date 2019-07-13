import React from 'react';


function Page2(props) {

    return (
      <div className="App">
        {props.testdata.map((val, key) => (
          <li key={key}>{val}</li>
        ))}
      </div>
    );
  }
  
  export default Page2;
  