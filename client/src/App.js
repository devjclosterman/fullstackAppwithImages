import 'bootstrap/dist.css/boottsrap.min.css';
import React, { useState } from 'react';
import { Router } from '@reach/router';
import Main from './views/main';
import Add from './views/add';
import OnePirate from './views/onePirate'

function App() {

const [reload, setReload ] = useState(true)

const update = () => {
  setReload(!reload)
}

  return (
    <Router> 
      <Main reload={reload} update={update} path="/" />
      <Add reload={reload} update={update} path="/pirate/new" />
      <OnePirate reload={reload} update={update} path="/pirate/:id" />
    </Router>
  );
}

export default App;
 