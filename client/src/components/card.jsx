import { link } from '@reach/router'
import axios from 'axios'
import React from 'react'

const Card = props => {
    const { pirate } = props;
    const { reload, update } = props;

    const clickHandler = () => {
        axios.delete(`https://localhost:8000/api/${pirate._id}`)
        .then(res => {
            console.log(res);
            update();
        })
        .catch(err => console.log(err))
    }
     return (
        <div class="card"> 
         <div class="card-body d-flex">
          <img
         </div>
        </div>
     )
} 