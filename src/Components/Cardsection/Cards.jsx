import React, { use, useState } from 'react'
import AvailablePlayers from '../Availableplayers/AvailablePlayers';
import SelectedPlayers from '../SelectedPlayers/SelectedPlayers';


const Cards = ({playerPromise,setCoin,coin,player}) => {


const playersData = use(playerPromise);
const players = playersData.cricketers; 

const [available,setAvailable]=useState("available");

const [choosePlayer, setChoosePlayer] = useState([]);


  return (
    <div className='mt-10'>
        <div className='flex justify-between max-w-[91%] mx-auto'>
            <div>
               {
                available==="available" ?(
                     <h2 className='text-3xl font-bold  '>Available Players</h2>
                ):(
                    <h2 className='text-3xl font-bold  '>Selected players {choosePlayer.length}/20</h2>
                )

               }
            </div>
            <div className='flex gap-3'>
                <button onClick={()=>setAvailable("available")}
                 className={`btn ${available==="available"?"bg-[#e7fe29]":""} rounded-sm cursor-pointer px-6 py-2`}>Available</button>
                <button onClick={()=>setAvailable("selected")}
                className={`btn ${available==="selected"?"bg-gray-200":""} px-6 py-2 cursor-pointer rounded-sm`} >Selected </button>
            </div>
        </div>
        

     {available==="available"?
     <AvailablePlayers playersData={players} setCoin={setCoin} coin={coin} player={player} choosePlayer={choosePlayer} setChoosePlayer={setChoosePlayer} /> :
     <SelectedPlayers choosePlayer={choosePlayer} setChoosePlayer={setChoosePlayer} setCoin={setCoin} coin={coin} player={player} />}
    </div>
  )
}

export default Cards