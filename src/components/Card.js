import React from "react";

const Card = ({ id, name, email }) => {
  return (
    <div className='tc bg-orange hover-bg-light-red dib br3 pa3 ma2 bw2 shadow-5 pointer'>
      <img
        src={`https://robohash.org/${id}`}
        alt='robot profile'
      />
      <div>
        <h2 className='purple'>{name}</h2>
        <p className='purple'>{email}</p>
      </div>
    </div>
  );
};

export default Card;