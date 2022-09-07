import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'

const PlanetDisplay = (props) => {
    const [planets, setPlanets] = useState();
    const [error, setError] = useState();
    const {id} = useParams();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
        .then(response => {
            console.log(response.data)
            setPlanets(response.data)
        })
        .catch(err => {
            console.log(err)
            setError(err)
        })
    }, [id])

    return(
        <div className="results">
            { planets && 
            <>
            <h2>{planets.name}</h2>
            <p><span>Climate: </span>{planets.climate}</p>
            <p><span>Terrain: </span>{planets.terrain}</p>
            <p><span>Surface Water: </span>{planets.surface_water}</p>
            <p><span>Population: </span>{planets.population}</p>
            <p><span>Gravity: </span>{planets.gravity}</p>
            </>
            }
            { error &&
            <>
            <h2>These aren't the droids you're looking for</h2>
            <img src="https://www.denofgeek.com/wp-content/uploads/2019/08/star-wars-obi-wan-kenobi-1-scaled.jpg?fit=2560%2C1707" alt="Obi-Wan_kenobi" />
            </>
            }
        </div>
    )
}

export default PlanetDisplay;