import { useContext } from "react";
import { NavLink } from "react-router-dom";

import AuthContext from "../contexts/auth/AuthContext";

import Button from "@mui/material/Button";

import LoginForm from "./LoginForm";

const Header = () => {
  const { isLoggedIn, logoutUser, userInfo, isShownLoginForm, showLoginForm } =
    useContext(AuthContext);
  return (
    <nav className="header-nav">
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          isActive ? "active-home-link" : "home-link"
        }
      >
        Home
      </NavLink>
      <ul>
        <li>
          <NavLink
            to="users"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Users
          </NavLink>
        </li>
        <li>
          <NavLink
            to="hotels"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Hotels
          </NavLink>
        </li>
        {isLoggedIn ? (
          <>
            <li className="loggedin-user">
              <img
                src={userInfo.image}
                alt={userInfo.firstName}
                className="loggedin-image"
              />
            </li>
            <Button variant="outlined" onClick={logoutUser} size="small">
              Log Out
            </Button>
          </>
        ) : (
          <Button variant="contained" size="small" onClick={showLoginForm}>
            Log In
          </Button>
        )}
      </ul>
      {isShownLoginForm && <LoginForm />}
    </nav>
  );
};

export default Header;
