import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'

const PeopleDisplay = (props) => {
    const [people, setPeople] = useState();
    const [error, setError] = useState();
    const {id} = useParams();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
        .then(response => {
            console.log(response.data)
            setPeople(response.data)
        })
        .catch(err => {
            console.log(err)
            setError(err)
        })
    }, [id])

    return(
        <div className="results">
            { people &&
            <>
            <h2>{people.name}</h2>
            <p><span>Height: </span>{people.height} cm</p>
            <p><span>Mass: </span>{people.mass} kg</p>
            <p><span>Gender: </span>{people.gender}</p>
            <p><span>Hair Color: </span>{people.hair_color}</p>
            <p><span>Skin Color: </span>{people.skin_color}</p>
            <p><span>Eye Color: </span>{people.eye_color}</p>
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

export default PeopleDisplay;