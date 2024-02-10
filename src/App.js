import React from 'react';

import QuoteComponent from './containers/QuoteComponent'

// import 'bootstrap/dist/css/bootstrap.min.css' // not required if use Bootstrap Sass
import './custom.scss';
import './App.css';

function App() {
  return (
    <div className="App">
      <QuoteComponent />
    </div>
  );
}

export default App;
