import reactDom from "react-dom";
import React from 'react';
import { App } from './routes/App.jsx';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from './context/Context'

reactDom.render(
  <Provider>
    <Router>
        <App />
    </Router>
  </Provider>,
    document.getElementById("root")
);