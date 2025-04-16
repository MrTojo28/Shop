import React, {ReactElement} from 'react';
import './MainContainer.css';

interface Props {
  children?: ReactElement;
}

export function MainContainer({ children }: Props) {
  return (
    <div className="main-container">
      {children}
    </div>
  );
}
