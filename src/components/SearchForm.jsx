import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchForm = (props) => {
    const [selectedResource, setSelectedResource] = useState("");
    const [numberId, setNumberId] = useState(1);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedResource === "people") {
            navigate(`/people/${numberId}`)
        }
        else if (selectedResource === "planets") {
            navigate(`/planets/${numberId}`)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="resource">Search For: </label>
                <select name="resource" value={selectedResource} onChange={(e)=>setSelectedResource(e.target.value)}>
                    <option hidden> Choose a Resource</option>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                </select>
                <label htmlFor="id">ID: </label>
                <input type="number" name="id" value={numberId} onChange={(e) => setNumberId(e.target.value)}></input>
                <button>Search</button>
            </form>
        </div>
    )
}

export default SearchForm;