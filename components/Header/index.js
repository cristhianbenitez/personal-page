import React from 'react';
import Button from '../Button';
const Header = ({ handleWorkScroll, handleAboutScroll }) => {
  return (
    <div className="mt-6 flex items-center justify-between sticky top-0 z-10 bg-white">
      <h1 className="font-medium mob:p-2 laptop:p-0">Cristhian Benitez</h1>
      <div>
        <Button onClick={handleAboutScroll}>About</Button>
        <Button
          onClick={() => window.open('mailto:cristhiantilleria@gmail.com')}
        >
          Contact
        </Button>
      </div>
    </div>
  );
};

export default Header;