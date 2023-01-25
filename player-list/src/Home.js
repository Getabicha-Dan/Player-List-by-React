import PlayerAdder from "./playerAdder";
import { useState } from "react";
import PlayerList from "./playerList";

const Home = () => {
    const[playersname,setPlayersname] =useState(['Messi','Rolando','Mbappe','Neymar']);

    const handelDelete = (nameTodelete)=>{
     const newPlayerlist=playersname.filter(name=>name!=nameTodelete);
     setPlayersname(newPlayerlist);
    }
    const handelAdder = (newName)=>{
     const updatedPlayerlist=playersname.push(newName);
     setPlayersname(updatedPlayerlist);
    }
    
    return ( 
        <div className="home">
            <h1> Player Adder</h1>
            <div className="nameAdder">
                <PlayerAdder playeradder={playersname} handelAdder={handelAdder}/>
            </div>
           <div className="list-Preview">
             <PlayerList playerlist={playersname} handelDelete={handelDelete}/>
           </div>
                                      
        </div>
             
     );
}
 
export default Home;