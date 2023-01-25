
const PlayerList = ({playerlist,handelDelete}) => {
   
    
    return ( 
        <div className="listed-players">
            {playersname.map((name)=>(
                <div className="playerlistPreview" key={playersname[i]}>
                    {name}
                    <button onClick={()=>handelDelete(nameTodelete)}>Delete</button>
                </div>
            ))}
           
            
        </div>
     );
}
 
export default PlayerList;