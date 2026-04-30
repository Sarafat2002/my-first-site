import React from 'react'
import { AiFillDelete } from 'react-icons/ai';

const SelectedPlayers = ({ choosePlayer, setChoosePlayer,coin,setCoin }) => {
  
const deleteHandler = (player)=>{
  const deletePlayer = choosePlayer.filter((playerDelete)=>playerDelete.id!==player.id);
  setChoosePlayer(deletePlayer);
  setCoin(coin + player.price)
}

  return (
    <div className='max-w-[91%] mx-auto mt-10'>
      {
        choosePlayer?.map((item) => {
          return(
            <div className='shadow-lg rounded-md p-5 flex justify-between items-center' key={item.id}>  

            <div className='flex items-center gap-3'>
               <div>
              <img className='w-20 h-22 ' src={item.image} alt="" />
             </div>
               
               <div>
                <h2 className='text-2xl font-bold'>{item.name}</h2>
               <p>{item.role}</p>
               </div>
            </div>

            <div>
              <button onClick={()=>deleteHandler(item)} className='text-red-600 text-2xl cursor-pointer'><AiFillDelete/></button>
            </div>
              
             </div>
          )
             
        })
      }
    </div>
  )
}

export default SelectedPlayers