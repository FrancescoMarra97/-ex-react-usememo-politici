
import { useEffect, useState } from 'react'
import './App.css'
import PoliticianCard from './components/PoliticianCard'

function App() {

  const [politicians, setPoliticians] = useState([])

  async function fetchJson(url) {
    try {
      const res = await fetch(url)
      const obj = await res.json()
      return obj
    } catch (error) {
      console.error("Errore nel fetch:", error);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchJson("https://boolean-spec-frontend.vercel.app/freetestapi/politicians")
      console.log(data);
      setPoliticians(data)
    }
    fetchData()
  }, [])

  return (
    <>
      <h1>Politici</h1>
      <div className='container'>
        <div className='row'>
          <PoliticianCard politicians={politicians}></PoliticianCard>
        </div>
      </div>
    </>
  )
}

export default App
