
import { useEffect, useState } from 'react'
import './App.css'
import PoliticianCard from './components/PoliticianCard'

function App() {

  const [politicians, setPoliticians] = useState([])
  const [query, setQuery] = useState("")

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
  const filteredPoliticans = politicians.filter((politician) => {
    return (
      politician.name.toLowerCase().includes(query.toLowerCase()) ||
      politician.biography.toLowerCase().includes(query.toLowerCase())
    )
  })

  return (
    <>
      <h1 className='text-center'>Politici</h1>
      <div className='container'>
        <div className='input-group mb-4'>
          <input type="text" className='form-control'
            placeholder="Cerca per nome o biografia"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className='row'>
          {filteredPoliticans.map((politician) => (
            <PoliticianCard key={politician.id} politician={politician}></PoliticianCard>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
