import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react/cjs/react.development';
import '../App.css';

function Item(props) {
  return (
    <button
      key={props.operation}
      className="mathItem"
      style={{ backgroundColor: colors[props.status] }}
      onClick={() => props.onClick(props.info)}
    >
      {props.label}
    </button>
  );
}

const colors = {
  selected: '#00f2ff',
  notSelected: '#3095ba',
};

ReactDOM.render(<Item />, document.getElementById('root'));

export default Item;
