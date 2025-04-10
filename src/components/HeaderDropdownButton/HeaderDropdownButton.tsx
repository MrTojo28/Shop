import React, {useState} from 'react';
import './HeaderDropdownButton.css';
import { NavLink,  } from 'react-router';

interface Props {
  text?: string,
  style?: React.CSSProperties,
  onClick?: ()=>void,
  items: {text: string, path: string, onClick?: () => void;}[],
  path: string
}

function HeaderDropdownButton({ text, style, items, onClick, path }: Props) {
  const [isMenuVisibe, setMenuVisible] = useState(false)
  return (
    <div className={'header-dropdown-button-container'}>
      <NavLink className={'header-dropdown-button'} to={path} style={style} onClick={()=>{onClick?.();}} onMouseOver={()=>setMenuVisible(!isMenuVisibe)}>
        {text}
      </NavLink>
      {
        isMenuVisibe &&
        <div className='dropdown-menu'>
          {
            items.map((item,index)=>{
              return <NavLink key={index} className={'dropdown-menu-item'} to={item.path} onClick={()=>{item.onClick?.();setMenuVisible(false)}}>
                {item.text}
              </NavLink>
            })
          }
        </div>
      }
    </div>
  );
}

export default HeaderDropdownButton;
