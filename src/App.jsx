import {useState} from 'react'
import './App.css'
import AllRoutes from './Routes/AllRoutes'
import Header from './Component/Header'
function App() {

  const [query, setQuery] = useState("");

  return (
    <>
      <Header query={query} setQuery={setQuery} />
      <AllRoutes query={query} setQuery={setQuery} />
    </>
  )
}

export default App
