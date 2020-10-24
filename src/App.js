import React from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

import PermanentDrawerLeft from './components/sidebar';

function App() {
  return (
    <React.Fragment>

    
    <Router>

    
    
      <PermanentDrawerLeft/>
    
    </Router>
    </React.Fragment>
  );
}

export default App;
