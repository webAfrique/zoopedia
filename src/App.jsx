//import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
//import Menu from './components/menu'
import Gallery from './components/Gallery'
//import Search from './components/Search'
import { animals, birds } from './animalsList'
import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main>
        <Gallery collection={animals}/>
      </main>
      <Footer/>
    </>
  )
}

export default App
