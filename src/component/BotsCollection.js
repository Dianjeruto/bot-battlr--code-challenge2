
import React, { useState, useEffect } from 'react';
import BotCard from 'BotCard';

const BotsCollection = ({ enlistBot }) => {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await BotCard.get(`https://my-json-server.typicode.com/DianJeruto/bot-battlr--code-challenge2.git/bots`);
        setBots(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleEnlist = (bot) => {
    
    enlistBot(bot);
  };

  return (
    <div>
      <h2>BotsCollection</h2>
      {bots.map((bot) => (
        <div key={bot.id}>
          <h3>{bot.name}</h3>
          
          <button onClick={() => handleEnlist(bot)}>Enlist</button>
          
        </div>
      ))}
    </div>
  );
};

export default BotsCollection;
