import { useState } from 'react'
import Card from "./Card"

//import Search from "./Search"

/* const Search = ({ collection, collectionName}) => {
    

    return (
        <div className="search">
            <span className="material-symbols-outlined search-icon">
                search
            </span>
            <input type="text" placeholder={`search ${collectionName}`}/>
        </div>
    )
} */

const Gallery = ({ collection, collectionName }) => {
    const [ list, setList ] = useState(collection)

    const runSearch = (event) => {
        let searchString = event.target.value.toLowerCase()
        let searchResults = list.filter(item => {
            return item.name.toLowerCase().includes(searchString)
        })
        searchResults.length > 0 ? setList(searchResults) : setList(null)
    }
    const handleBackspace = (event) => {
      const key = event.which || event.key || event.code
      if( key === 8 || key === 'Backspace') {
        if(event.target.value === '') setList(collection)
        let searchString = event.target.value.toLowerCase()
        let searchResults = collection.filter(item => {
            return item.name.toLowerCase().includes(searchString)
        })
        setList(searchResults) 
      }  
    }
    return (
        <>
            <div className="search" onInput={runSearch} onKeyDown={handleBackspace}>
            <span className="material-symbols-outlined search-icon">
                search
            </span>
            <input type="text" placeholder={`search ${collectionName}`}/>
            </div>

            <main className="gallery">
                { list 
                    ? 
                list.map(item => {
                    return <Card key={item.name} name={item.name}/>
                })
                    :
                <h1 className="not-found">Not found!</h1>
            }
            </main>
        </>
    )
}

export default Gallery