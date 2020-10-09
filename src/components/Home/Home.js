import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Home = () => {

    const [countries, setCountries] = useState([]);

    useEffect(() => {

        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    return (
        <div className="container">

            <h1 className="text-center p-5">Total Country: {countries.length}</h1>

            <div className="row">
                {
                    countries.map(country => <Country country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Home;