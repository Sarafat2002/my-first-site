
import { Suspense, useState } from 'react'
import './App.css'
import Cards from './Components/Cardsection/Cards'
import Banner from './Components/Hero/Banner'
import Navbar from './Components/Navigation/Navbar'

const fetchPlayers = async () => {
  const res = await fetch("/data.json");
  return res.json();
}



function App() {
  const [coin, setCoin] = useState(10504000)

  const playerPromise = fetchPlayers();

  return (

    <>
      <Navbar coin={coin} />
      <Banner />
      <Suspense fallback={<p className='text-center py-7'>loding.........</p>}>
        <Cards playerPromise={playerPromise} setCoin={setCoin} coin={coin} />
      </Suspense>
    </>
  )
}

export default App
