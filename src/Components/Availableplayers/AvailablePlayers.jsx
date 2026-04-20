import React, { useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { IoFlagSharp } from 'react-icons/io5'


const AvailablePlayers = ({ playersData }) => {

    const [choosePlayer, setChoosePlayer] = useState([]);


    const choseHandler = (player) => {
        const currentPlayer = choosePlayer.find((item) => item.id === player.id);
        if (!currentPlayer) {
            setChoosePlayer([...choosePlayer, player])
        }
    }



    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-10 rounded-md max-w-[91%] mx-auto mt-10 '>

            {
                playersData?.map((player) => {

                    const isSelected = choosePlayer.find((p)=>p.id===player.id)

                    return(
                                            <div key={player.id} className='shadow-lg rounded-md p-5'>
                        <img className='w-full h-90 rounded-md' src={player.image} alt="" />
                        <div className='flex gap-3 items-center'>
                            <FaUser />
                            <h4 className='text-2xl font-bold'>{player.name}</h4>
                        </div>

                        <div className='flex justify-between'>
                            <div className='flex items-center gap-4'>
                                <IoFlagSharp className='text-xl' />
                                <p className='text-xl'>{player.country}</p>

                            </div>
                            <div>
                                <button className='px-4 py-2 bg-gray-200 rounded-sm cursor-pointer'>{player.role}</button>
                            </div>


                        </div>

                        <p>{player.rating}</p>
                        <p >{player.batting_style}</p>
                        <p >{player.bowling_style}</p>

                        <div className='flex justify-between items-center'>
                            <p>{player.price}</p>
                            <button
                                onClick={() => choseHandler(player)}
                                disabled={isSelected}
                                className="px-4 py-2 bg-green-300 cursor-pointer"
                            >
                                {isSelected ? "Chosen" : "Choose Player"}
                            </button>
                        </div>



                    </div>
                    )
                }
                )
            }

        </div>
    )
}

export default AvailablePlayers