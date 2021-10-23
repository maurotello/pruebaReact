import React from 'react';
import ReactDOM from 'react-dom';
function Reloj() {
    const element = (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
    setInterval(Reloj, 1000);
  }
  
  export default Reloj;