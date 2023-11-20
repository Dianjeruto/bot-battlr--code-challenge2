import React from 'react';

const BotCard = ({ bot, onEnlist }) => {
  const handleEnlist = () => {
        
    onEnlist(bot);
  };
  function BotCard({ bot, clickEvent, deleteBot }) {

  return (
    <div className={{BotCard}}>
      <h3>{bot.name}</h3>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <button onClick={handleEnlist}>Enlist</button>
    </div>
  );
};
};
export default BotCard;
