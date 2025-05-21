import React, { Fragment, ReactElement, ReactNode } from "react";
import { useLocation, NavLink } from "react-router";
import Paths from "../../Paths";
import Images from "../../Images";
import "./Header.css";

interface Props {
  leftButtons?: ReactElement[];
  rightButtons?: ReactElement[];
}

const navigationRenderer = (location: string): ReactNode => {
  const currentPath = location.split("/").map((path: string) => {
    //@ts-ignore
    return { path, text: Paths[path] };
  });
  currentPath[0] = { path: "/", text: Paths["mainPage"] };
  const pathLenght = currentPath.length;
  const isMainPage = currentPath[1].path === "";
  return (
    !isMainPage &&
    currentPath.map((path, index) => (
      <>
        <NavLink key={index} className="navigation-element" to={path.path}>
          {path.text}
        </NavLink>
        {pathLenght !== index + 1 && <div className="separator">/</div>}
      </>
    ))
  );
};

export function Header({ leftButtons, rightButtons }: Props) {
  const location = useLocation();
  return (
    <div className="header">
      <div className="cart">
        <NavLink className="cart__link" to={"/productsCart"}>
          <img src={Images.cart} alt="" />
          Корзина
        </NavLink>
      </div>
      <div className="logo">
        <img src={Images.logo} alt="" />
      </div>
      <div className="menu">
        <div className="left-buttons">
          {leftButtons?.map((element, index) => (
            <Fragment key={index}>{element}</Fragment>
          ))}
        </div>
        <div className="right-buttons">
          {rightButtons?.map((element, index) => (
            <Fragment key={index}>{element}</Fragment>
          ))}
        </div>
      </div>
      <div className="submenu">
        <div className="navigation">
          {navigationRenderer(location.pathname)}
        </div>
      </div>
    </div>
  );
}
