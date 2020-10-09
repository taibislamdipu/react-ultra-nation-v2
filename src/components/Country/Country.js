import React from 'react';
import { Link } from 'react-router-dom';

const Country = (props) => {
    console.log('from homepage', props);

    const { name, capital, flag } = props.country;
    return (

        <div className="col-md-4">
            <div className="card" style={{ width: "18rem" }}>
                <img src={flag} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                    <Link to={`/countryDetails/${name}`}>
                        <button className="btn btn-primary">
                            More About {name}
                        </button>
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default Country;