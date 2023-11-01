//import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
//import Menu from './components/menu'
import Display from './components/Display'
import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main>
        <Display />
      </main>
      <Footer/>
    </>
  )
}

export default App
