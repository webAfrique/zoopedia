import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    return (
        <main className="home">
            <div onClick={() => navigate('/animals')} className="menu-image"></div>
            <div onClick={() => navigate('/birds')} className="menu-image"></div>
        </main>
    )
}

export default Home