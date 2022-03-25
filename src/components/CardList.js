import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  const cards = robots.map(robot => {
    const { id, name, email } = robot;
    return <Card key={id} id={id} name={name} email={email} />;
  });

  return (
    <div>
      {cards}
    </div>
  );
};

export default CardList;