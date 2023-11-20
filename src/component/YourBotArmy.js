import React from "react";
import BotCard from ".component/BotCard";

function YourBotArmy({ bots, removeBot, deleteBot }) {
  
  const armyItem = bots.map((bot) => {
    return (
      <BotCard
        key={bot.id}
        bot={bot}
        clickEvent={removeBot}
        deleteBot={deleteBot}
      />
    );
  });

  return (
    
<div className="row bot-army-row">
    {armyItem}
        </div>
       );
}

export default YourBotArmy;