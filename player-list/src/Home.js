import PlayerAdder from "./playerAdder";
import { useState } from "react";
import PlayerList from "./playerList";

const Home = () => {
    const [playersname, setPlayersname] = useState(['Messi','Rolando','Mbappe','Neymar']);

    const handleDelete = (nameTodelete) => {
        const newPlayerlist = playersname.filter(name => name !== nameTodelete);
        setPlayersname(newPlayerlist);
    }
    const handleAdder = (newName) => {
       // playersname.push(newName);
        setPlayersname([...playersname, newName]);
    }
    
    return ( 
        <div className="home">
            <h1> Player Adder</h1>
            <div className="nameAdder">
                <PlayerAdder handleAdder={handleAdder}/>
            </div>
           <div className="list-Preview">
                <PlayerList playerList={playersname} handleDelete={handleDelete}/>
           </div>                            
        </div>     
    );
}
 
export default Home;