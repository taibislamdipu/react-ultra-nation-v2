import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetails = () => {

    const { name } = useParams();

    const [countrys, setCountrys] = useState([])

    useEffect(() => {
        fetch(`https://restcountries.eu/rest/v2/name/${name}`)
            .then(res => res.json())
            .then(data => setCountrys(data[0]))
    }, [])

    const { capital, flag, region, population } = countrys;

    return (
        <div className="container">
            <div class="card p-5" style={{ width: "100%" }}>
                <h1>{name}</h1>
                <h3>Region: {region}</h3>
                <h2>Population: {population}</h2>
                <img src={flag} class="card-img-top" alt="..." />
                <div class="card-body">
                    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, illum. Esse porro placeat laborum ad?</p>
                </div>
            </div>
        </div>
    );
};

export default CountryDetails;