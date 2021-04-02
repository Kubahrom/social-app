import React from 'react';
import { useState, useContext } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/auth';

const MenuBar: React.FC = () => {
  const { user, logout }: any = useContext(AuthContext);
  const pathname: string = window.location.pathname;
  const path: string = pathname === '/' ? 'home' : pathname.substr(1);
  const [activeItem, setActiveItem] = useState<string>(path);

  const handleItemClick = (name: string): void => {
    setActiveItem(name);
  };

  return (
    <Menu pointing secondary size="massive" color="blue">
      <Menu.Item
        name={user ? user.username : 'Home'}
        active={activeItem === 'home'}
        onClick={() => handleItemClick('home')}
        as={Link}
        to="/"
      />
      <Menu.Menu position="right">
        {user ? (
          <Menu.Item name="Logout" onClick={logout} />
        ) : (
          <>
            <Menu.Item
              name="Login"
              active={activeItem === 'login'}
              onClick={() => handleItemClick('login')}
              as={Link}
              to="/login"
            />
            <Menu.Item
              name="Register"
              active={activeItem === 'register'}
              onClick={() => handleItemClick('register')}
              as={Link}
              to="register"
            />
          </>
        )}
      </Menu.Menu>
    </Menu>
  );
};

export default MenuBar;
