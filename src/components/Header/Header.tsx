import React, {ReactElement, ReactNode} from 'react';
import { useLocation, NavLink } from 'react-router'
import Paths from '../../Paths';
import './Header.css';

interface Props {
  leftButtons?: ReactElement[];
  rightButtons?: ReactElement[];
}

const navigationRenderer = (location: string): ReactNode => {
  //@ts-ignore
  const currentPath = location.split('/').map((path:string)=>{return { path, text: Paths[path] }});
  currentPath[0] = {path:'/',text:Paths['mainPage']}
  const pathLenght = currentPath.length;
  const isMainPage = currentPath[1].path === '';
  return (
    !isMainPage &&
    currentPath.map((path, index) => 
      <>
        <NavLink className='navigation-element' to={path.path}>{path.text}</NavLink>
        {
          pathLenght !== index+1 && 
          <div className='separator'>/</div>
        }
      </>
    )
  )
}

function Header({ leftButtons, rightButtons }: Props) {
  const location = useLocation();
  return (
    <div className="header">
      <div className='logo'>
        Флорекс
      </div>
      <div className='menu'>
        <div className="left-buttons">
          {leftButtons?.map((element)=>element)}
        </div>
        <div className="right-buttons">
          {rightButtons?.map((element)=>element)}
        </div>
      </div>
      <div className='submenu'>
        <div className='navigation'>
          {navigationRenderer(location.pathname)}
        </div>
        <div className='cart'>
          <NavLink className='cart__link' to={'/productsCart'}>Корзина</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Header;
