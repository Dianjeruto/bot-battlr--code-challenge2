import React, { useEffect, useState } from "react";
import BotsCollection from ".component/BotCollection";
import BotArmy from ".component/YourBotArmy";

function BotDisplay() {
  let [bots, setBot] = useState([])

  useEffect(() => {

    fetch(`https://my-json-server.typicode.com/DianJeruto/bot-battlr--code-challenge2.git/bots`)
      .then((resp) => resp.json())
      .then(data => setBot(data))
  }, [])

  let addBot= (bot)=>{
    setBot(bots.map((b)=>(b.id === bot.id ? {...b, army:true} : b)))
}
let removeBot =(bot)=>{
    setBot(bots.map((b)=>(b.id === bot.id ? {...b, army:false} : b)))
}

let deleteBot = (bot)=>{
    let botRemoved =  bots.filter((b)=> b.id !==bot.id);
    setBot((bot)=>botRemoved)
}
  return (
    <div>
    <BotArmy
            bots={bots.filter((b)=>b.army)}
            removeBot={removeBot}
            deleteBot={deleteBot}
            
            />
 <BotsCollection 
            bots= {bots}
            addBot={addBot}
            deleteBot={deleteBot}
 />
 </div>
  )
}

export default BotDisplay;
