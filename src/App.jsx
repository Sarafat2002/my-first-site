
import { Suspense } from 'react'
import './App.css'
import Cards from './Components/Cardsection/Cards'
import Banner from './Components/Hero/Banner'
import Navbar from './Components/Navigation/Navbar'

  const fetchPlayers = async () =>{
    const res = await fetch("/data.json");
    return res.json();
  }

function App() {

const playerPromise = fetchPlayers();

  return (
    
    <>
      <Navbar/>
      <Banner/>
      <Suspense fallback={<p>loding.........</p>}>
        <Cards playerPromise={playerPromise} />
      </Suspense>
    </>
  )
}

export default App
