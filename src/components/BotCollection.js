import React, { useEffect, useState } from 'react';
import "./BotCollection"; 

function BotCollection({ enlistBot, showBotSpecs, enlistedBots }) {
  const [bots, setBots] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/bots') 
      .then(response => response.json())
      .then(data => setBots(data));
  }, []);

  return (
    <div className="container">
      <h2>Bot <span>Collection</span></h2>
      <div className="bot-card-container">
        {bots.map(bot => (
          <div className={`bot-card ${enlistedBots.some(b => b.id === bot.id) ? 'enlisted' : ''}`} key={bot.id} 
            onClick={() => showBotSpecs(bot)}>
            <img src={bot.avatar_url} alt={bot.name} />
            <h3>{bot.name}</h3>
            <p>Health: {bot.health}</p>
            <p>Damage: {bot.damage}</p>
            <p>Armor: {bot.armor}</p>
            <p>Class: {bot.bot_class}</p>
            
            {enlistedBots.some(b => b.id === bot.id) ? (
              <p className="enlisted-message">Enlisted</p>
            ) : (
              <button onClick={() => enlistBot(bot)}>Enlist</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
