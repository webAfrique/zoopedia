import Card from "./Card"
import Search from "./Search"

const Gallery = ({ collection }) => {
    return (
        <>
            <Search />
            <main className="gallery">
                {collection.map(item => {
                    return <Card key={item.name} name={item.name}/>
                })}
            </main>
        </>
    )
}

export default Gallery