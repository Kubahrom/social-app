import React from 'react';
import { useState } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const MenuBar: React.FC = () => {
  const pathname: string = window.location.pathname;
  const path: string = pathname === '/' ? 'home' : pathname.substr(1);
  const [activeItem, setActiveItem] = useState<string>(path);

  const handleItemClick = (name: string): void => {
    setActiveItem(name);
  };

  return (
    <Menu pointing secondary size="massive" color="blue">
      <Menu.Item
        name="Home"
        active={activeItem === 'home'}
        onClick={() => handleItemClick('home')}
        as={Link}
        to="/"
      />
      <Menu.Menu position="right">
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
        <Menu.Item
          name="Logout"
          active={activeItem === 'logout'}
          onClick={() => handleItemClick('logout')}
        />
      </Menu.Menu>
    </Menu>
  );
};

export default MenuBar;
