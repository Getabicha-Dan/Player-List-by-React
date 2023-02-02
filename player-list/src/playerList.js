
const PlayerList = ({playerList,handleDelete}) => {
    
    return ( 
        <div className="listed-players">
            {playerList.map((name)=>(
                <div className="playerlistPreview" key={name}>
                    {name}
                    <button onClick={()=>handleDelete(name)}>Delete</button>
                </div>
            ))}
        </div>
     );
}
 
export default PlayerList;

