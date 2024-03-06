import React from 'react';
import { useParams } from 'react-router-dom';

const RedirectCompo = () => {
    const { name } = useParams();
    return (
        <div>
            It is redirected component
            <br />
            <h2>Nokkindhi nenu kadu andi edu nokkadu {name} </h2>
            {/* <h3>{match.params.name}</h3> */}
        </div>
    )
}

export default RedirectCompo