
const PlayerAdder = ({playerList,handelAdder}) => {
   
    return ( 
        <div className="nameAdder">
                <form action="playerName">
                    <input type="text" placeholder="Add player name"/>
                </form>
                <form action="addButton">
                    <button onClick={()=>handelAdder(newName)}> Add Player</button>
                </form>

        </div> 
     );
}
 
export default PlayerAdder;
