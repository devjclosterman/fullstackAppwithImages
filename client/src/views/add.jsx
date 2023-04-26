import React, { useState } from 'react';
import { Link, navigate} from '@reach/router';
import { handleFileUpload } from '../utilites/handleFileUpload';
import axios from 'axios';

const Add = props => {
    const [ onePirate, setOnePirate ] = useState({
        name: "",
        treasure: "",
        image: '',
        position: "",
        leg: true,
        patch: true,
        hook: true
});

const [ errors, setErrors ] = useState({});
const { update, reload } = props;

const changeHandler = e => {
    setOnePirate({...onePirate, [e.target.name] : e.target.value})
}
const boxHandler = e => {
    setOnePirate({...onePirate, [e.target.name]: !e.target.value})
}
const imageHandler = async (e) => {
    e.preventDefault();
    handleFileUpload(e.target.files[0])
        .then(blob => {
            let imgString = blob.toString()
            setOnePirate({ ...onePirate, image: imgString })
        })
    
    
}

const submitHandler = e => {
    e.preventDefault();
    
    axios.post('http://localhost:8000/api', onePirate)
    .then(res => {
        if ( res.data.error ){
            // console.log(res.data.error.errors);
            setErrors(res.data.error.errors)
        } else {
            
            update();
            navigate("/pirate/" + res.data.results._id);
        }
    })
    .catch(err => console.log(err));
}


return (
    <div className="container" style={{backgroundColor: 'orange'}}>
        <nav class="navbar fixed-top navbar-dark bg-secondary">
            <h1 className="text-lg-center" style={{ marginLeft: "45%" }}>Add Crew</h1>
            <Link to="/"><button className="btn btn-primary" >Crew Board</button></Link>
        </nav> <br /><br /><br /><br /><br /><br /><br /><br />
        
        <div className="form-container" style={{display: 'inline'}} >
            <form className="d-flex" onSubmit={ submitHandler } style={{backgroundColor: 'orange'}}>
                <div className="left col-5">
                    <div class="form-group">
                        <label for="formGroupExampleInput">Member Name: </label>
                        <input type="text" class="form-control" name='name' onChange={ changeHandler } value={onePirate.name} id="formGroupExampleInput" placeholder="Member Name"/>
                        { errors.name ? <span className="text-danger">{errors.name.message} </span> : "" }
                        {onePirate.name.length < 3 ? <span className="text-danger">Name is required and must be greater than 3 characters!</span> : "" }
                        <br /><br /><br />
                        
                        <label for="formGroupExampleInput">Image File: </label>
                        <input type="file" accept='.png, .jpg, .jpeg, .svg' class="form-control" id="formGroupExampleInput" name='image' onChange={ e => imageHandler(e) } placeholder="Avatar Image"/>
                        { errors.image ? <span className="text-danger">{errors.image.message} </span> : "" }
                        {onePirate.image == null ? <span className="text-danger">Image is required and must be a single file less than 16 mb!!</span> : "" }
                        <br /><br /><br />
                        
                        <label for="formGroupExampleInput"># of Treasure Chests Looted:  </label>
                        <input type="number" class="form-control" id="formGroupExampleInput" name='treasure' onChange={ changeHandler } value={onePirate.treasure} placeholder="Do u even loot?"/>
                        { errors.treasure ? <span className="text-danger">{errors.treasure.message} </span> : "" }
                        {!onePirate.treasure || onePirate.treasure.includes("-")? <span className="text-danger">Treasure must be 0 or greater to join</span> : "" }
                        <br /><br />
                        
                        <label htmlFor="phrase">Catchy Catch Phrase: </label>
                        <textarea className="form-control" required name='phrase' onChange={ changeHandler } value={onePirate.phrase}></textarea>
                        { errors.phrase ? <span className="text-danger">{errors.phrase.message} </span> : "" }
                        {onePirate.phrase.length < 6 ? <span className="text-danger">Catch phrase is required and must be greater than 5 characters!</span> : "" }
                    </div>
                </div>
                <div className="right col-5">
                    <div class="form-group">
                    <label for="formGroupExampleInput">Crew Position: </label>
                    <select id="Select" class="form-control" required name='position' onChange={ changeHandler } value={onePirate.position}>
                            <option selected disabled={true} value="">Select</option>
                            <option value="The Professor">The Professor</option>
                            <option value="Rage Kid">Rage Kid</option>
                            <option value="Rusher">Rusher</option>
                            <option value="Sniper">Sniper</option>
                            <option value="LMG">LMG</option>
                            <option value="Tactical">Tactical</option>
                            <option value="Intel">Intel</option>
                            <option value="Driver">Driver</option>
                        </select>
                        {onePirate.position.length < 1 ? <span className="text-danger">A position is required for every lootin' crew!</span> : "" }
                        { errors.position ? <span className="text-danger">{errors.position.message} </span> : "" }
                        <br /><br />
                        
                        <input type="checkbox" style={{marginLeft: '50px'}} defaultChecked={onePirate.leg} name='leg' onChange={ boxHandler } value={onePirate.leg} /> &nbsp;&nbsp;
                        <label for="formGroupExampleInput">Backup Driver? </label>
                        { errors.leg ? <span className="text-danger">{errors.leg.message} </span> : "" }
                        <br /><br /> <br /><br />
                        
                        <input type="checkbox" style={{marginLeft: '50px'}} defaultChecked={onePirate.patch}  name='patch' onChange={ boxHandler } value={onePirate.patch}/> &nbsp;&nbsp;
                        <label for="formGroupExampleInput">Self-Revive? </label>
                        { errors.patch ? <span className="text-danger">{errors.patch.message} </span> : "" }
                        <br /><br /><br /><br />
                        
                        <input style={{marginLeft: '50px'}} type="checkbox" defaultChecked={onePirate.hook} name='hook' onChange={ boxHandler } value={onePirate.hook} /> &nbsp;&nbsp;
                        <label for="formGroupExampleInput">3 Plate Armor Vest? </label>
                        { errors.hook ? <span className="text-danger">{errors.hook.message} </span> : "" }
                        <br /><br /><br />
                        
                        <input type="submit" style={{marginLeft: '50px'}} className="btn btn-primary" value="Add Squad Memeber" />
                        
                    </div>
                </div>
            </ form>
        </div>
    
    </div>
            );

}
            export default Add;