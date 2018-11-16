import React from 'react';
import './Rating.css';

const setClass = (key, value) => key === value ? 'highlighted' : '';

const Rating = ({rates, value, clickRate}) => (
  <ul className="Rating">
    {
      rates.map((rate, key) => (
        <li key={key} className={setClass(key, value)} onClick={() => clickRate(key)}>
          {rate}
        </li>
      ))
    }
  </ul>
);

export default Rating;
