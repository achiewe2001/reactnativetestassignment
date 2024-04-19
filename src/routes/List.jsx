// List.js
import React, { useContext } from 'react';
import { AppContext } from '../App';

export default function List() {
  const { state } = useContext(AppContext);

  return (
    <div>
      <h1>List of Combined Elements</h1>
      <ul>
        {state && state.map((item, index) => (
          <li key={index}>
            <span>Name: {item.name}</span>
            <span>Body: {item.body}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

