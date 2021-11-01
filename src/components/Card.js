import React from 'react';
import ReactDOM from 'react-dom';
import '../App.css';

function Card(props) {
  return (
    <div className="containerCard">
      <p className="textCard">
        {props.label} {props.value}
      </p>
      <div className="buttonsCardGroup">
        <button className="buttonCard" onClick={() => props.apply(props.operation, props.value)}>
          Apply
        </button>
        <button
          className="buttonCard"
          onClick={() => props.delete(props.label, props.operation, props.value)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

ReactDOM.render(<Card />, document.getElementById('root'));

export default Card;
