import React from 'react';
import './Banner.css';

export default function Banner(props) {
  return(
    <div className="banner">
      <h1>{props.texto}</h1>
    </div>
  );
}