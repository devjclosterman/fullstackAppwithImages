import React, { useEffect, useState } from 'react';
import { Link } from '@reach/router';
import axios from 'axios';

const OnePirate = props => {
    const { id } = props;
    const [thisPirate, setThisPirate] = useState(null)
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/${id}`)
        .then(res => {
            console.log(res.data)
            setThisPirate(res.data.results)})
        .catch(err => console.log(err))
    }, [])
    
    return(
        <div>
            { thisPirate ? <div>
            <nav class="navbar fixed-top navbar-dark bg-secondary">
                <h1 className="text-lg-center" style={{ marginLeft: "45%" }}>{thisPirate.name}</h1>
                <Link to="/"><button className="btn btn-primary" >Crew Board</button></Link>
            </nav> <br /><br /><br /><br /><br /><br /><br /><br />
            <div className="container d-flex" style={{backgroundColor: 'orange', padding: '50px'}}>
                <div className="col-5">
                    <img src={thisPirate.image} alt={thisPirate.name} style={{height: "300px", marginBottom: '50px'}} /> <br />
                    <h1 style={{textAlign: 'center'}}>"{thisPirate.phrase}"</h1>
                    
                </div>
                
                <div className="col-5" style={{marginLeft: '70px', padding: '40px 40px 150px 50px', backgroundColor: 'whitesmoke'}}>
                    <h2>Position: {thisPirate.position}</h2>
                    <br />
                    <h2>Treasures: {thisPirate.treasure}</h2>
                    <br />
                    <h2>Backup Driver: {thisPirate.leg ? "Yes" : "No "}</h2>
                    <br />
                    <h2>Self-Revive: {thisPirate.patch ? "Yes" : "No "}</h2>
                    <br />
                    <h2>3-Plate Armor Vest: {thisPirate.hook ? "Yes" : "No "}</h2>
                    
                </div>
                
                
                
            </div>
            
            </div>: "Loading..."}
        </div>
    );
}

export default OnePirate;