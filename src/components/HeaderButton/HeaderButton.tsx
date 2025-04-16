import React from 'react';
import './HeaderButton.css';
import { NavLink } from 'react-router';

interface Props {
  text?: string,
  style?: React.CSSProperties,
  path: string
}

export function HeaderButton({ text, style, path }: Props) {
  return (
    <NavLink className={'header-button'} to={path}>
      <div style={style}>
        {text}
      </div>
    </NavLink>
  );
}
