import React from "react";
import './Scroll.css';

const Scroll = ({ children }) => {
  return (
    <div className='scrollable'>
      {children}
    </div>
  );
};

export default Scroll;