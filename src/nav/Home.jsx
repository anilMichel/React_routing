import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    function handleClick() {
        navigate('/Dashboard');
    }
    return (
        <div>
            Home <br />
            <button onClick={handleClick}>Nokku ra Oumka</button>
        </div>
    )
}

export default Home