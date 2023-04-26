import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from '../components/card';
import axios from 'axios';
import { Link} from '@reach/router';

const Main = (props) => {
    const [pirates, setPirates] = useState(null)
    const { reload, update } = props;

    useEffect( () => {
        axios.get('http://localhost:8000/api')
        .then(res => setPirates(res.data.results))
        .catch(err => console.log(err))
    }, [reload])

    return (
        <div className="container" style={{backgroundColor: 'orange'}}>
            <nav class="navbar fixed-top navbar-dark bg-secondary">
                
                <h1 className="text-lg-center" style={{marginLeft: "35%"}}>
                     Battle Royale Crew
                </h1>
                
                <Link to="/pirate/new">
                    <button className="btn btn-primary" >
                    Add Member
                    </button>
                </Link>
                
            </nav> 
            <br /><br /><br /><br />
            
            { pirates ? 
                pirates.map((pirate, i) => (
                    <div className="container"> <Card key={i} pirate={pirate} reload={reload} update={update} /> <br /> </div>
                ))
            : "There are no member in the crew. Add a pirate with the top right link. "
            }
            
            
        </div>
    );
}

export default Main;

