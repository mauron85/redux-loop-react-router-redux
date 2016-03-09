import React from 'react';

const App = ({ children }) => (
  <div className="container">
    <div className="statusbar-overlay"></div>
    <div id="views" className="views">
      { React.cloneElement(children || <div className="container"/>, {}) }
    </div>
  </div>
);

export default App;
