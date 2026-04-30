import React from 'react'
import CricketLogo from "../../assets/logo_1.png";
import BuyCoin from "../../assets/dollar_1.png";

const Navbar = ({coin}) => {
    console.log(coin);
    return (
        <div className='flex justify-between px-22 shadow-md py-2 items-center '>
            <div>
                <img src={CricketLogo} alt="" />
            </div>
            <div className='flex gap-10'>
                <ul className='flex gap-10'>
                    <li className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded'><a href="#">Home</a></li>
                    <li className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded'><a href="##">Fixture</a></li>
                    <li className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded'><a href="#">Teams</a></li>
                    <li className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded'><a href="#">Shedules</a></li>
                </ul>
                <button className="rounded-sm flex items-center gap-2 px-3 py-1 shadow-md font-bold">
                   {coin}
                    <img src={BuyCoin} alt="Buy coins" className="w-4 h-4" />
                </button>
            </div>

        </div>
    )
}

export default Navbar