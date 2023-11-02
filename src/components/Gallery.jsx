import Card from "./Card"

const Gallery = ({ collection }) => {
    return (
        
        <div className="card-container">
            {collection.map(item => {
                return <Card key={item.name} name={item.name}/>
            })}
        </div>
    )
}

export default Gallery