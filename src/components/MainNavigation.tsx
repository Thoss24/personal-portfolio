import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <div className={classes.header}>
        <h2>Thomas Fogarty</h2>
    <ul className={classes['header-nav']}>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? classes.active : "")}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"portfolio"}
          className={({ isActive }) => (isActive ? classes.active : "")}
        >
          Portfolio
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"contact"}
          className={({ isActive }) => (isActive ? classes.active : "")}
        >
          Contact
        </NavLink>
      </li>
    </ul>
    </div>
  );
};

export default MainNavigation;
