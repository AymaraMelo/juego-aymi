import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import '../App.css';
import Item from './MathItem';
import Card from './Card';
import { validColor } from '../validations/colorValidation';

const Game = () => {
  const operations = [
    { label: 'X', operation: '*' },
    { label: '%', operation: '/' },
    { label: '+', operation: '+' },
    { label: '-', operation: '-' },
  ];

  const [cards, setCards] = useState([]);
  const [baseValue, setBaseValue] = useState(10);
  const [newValue, setNewValue] = useState(null);
  const [color, setColor] = useState('#ffffff');
  const [operationStatus, setOperationStatus] = useState({ label: '', operation: '' });

  const handleCards = () => {
    if (newValue && operationStatus) {
      const newCard = {
        label: operationStatus.label,
        operation: operationStatus.operation,
        value: newValue,
      };
      setCards([...cards, newCard]);
    }
  };

  const handleDeleteCard = (label, operation, value) => {
    const newCards = cards.filter(
      (c) => label !== c.label && operation !== c.operation && value !== c.value,
    );
    console.log(newCards.length);
    setCards(newCards);
  };

  const handleApply = (operation, value) => {
    let newBaseValue;
    switch (operation) {
      case '+': {
        newBaseValue = baseValue + value;
        break;
      }
      case '-': {
        newBaseValue = baseValue - value;
        break;
      }
      case '*': {
        newBaseValue = baseValue * value;
        break;
      }
      case '/': {
        newBaseValue = baseValue / value;
        break;
      }
      default:
        break;
    }
    if (newBaseValue >= 0) {
      setBaseValue(+newBaseValue);
    }
  };

  const handleSelectedOperation = (myOperation) => {
    if (myOperation === operationStatus.label) {
      return 'selected';
    }
    return 'notSelected';
  };

  const handleColor = (color) => {
    if (validColor.test(color) && [...color].length === 7) {
      setColor(color);
    }
  };

  return (
    <div className="containerGame">
      <div className="content">
        <input
          className="inputColor"
          type="text"
          maxLength="7"
          defaultValue={color}
          onChange={(event) => handleColor(event.target.value)}
        ></input>
        <h1 className="textTitle" style={{ color: color }}>
          El juego de Aymi
        </h1>
      </div>
      <div className="content">
        {operations.map((op, index) => (
          <Item
            key={`${index}_${op.operation}`}
            info={op}
            label={op.label}
            operation={op.operation}
            onClick={setOperationStatus}
            status={handleSelectedOperation(op.label)}
          />
        ))}
      </div>
      <div className="content">
        <div className="buttonGroup">
          <input
            className="input"
            type="number"
            onChange={(event) => setNewValue(+event.target.value)}
          ></input>
          <button className="addButton" onClick={() => handleCards()}>
            Add
          </button>
        </div>
        <h1 className="textTitle">{baseValue}</h1>
      </div>
      <div className="contentCards">
        {cards.map((card, index) => (
          <Card
            key={`${index}`}
            label={card.label}
            operation={card.operation}
            value={card.value}
            apply={handleApply}
            delete={handleDeleteCard}
          ></Card>
        ))}
      </div>
    </div>
  );
};

const BoardGame = () => {
  return <Game key={1} />;
};

ReactDOM.render(<BoardGame />, document.getElementById('root'));

export default BoardGame;
