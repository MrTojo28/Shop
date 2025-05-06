import React from 'react';
import './StyleButton.css';

interface Props {
  text?: string,
  cls?: string,
  style?: React.CSSProperties,
  onClick: ()=>void;
}

export function StyleButton({ text, style, onClick, cls }: Props) {
  return (
    <div className='button-container'>
      <button className={'style-button ' + cls} style={style} onClick={onClick}>
        {text}
      </button>
    </div>
  );
}
