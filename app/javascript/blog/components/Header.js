import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const navColor = { color: 'purple' };
  return (
    <div className='nav justify-content-between bg-light  border-bottom  py-3 px-2'>
      <Link to='/'>
        <h2 style={navColor}>React-Redux-Blog</h2>
      </Link>
      <div className='right menu'>
        <Link to='/'>
          <h2 style={navColor}> All Blogs</h2>
        </Link>
      </div>
    </div>
  );
};

export default Header;
