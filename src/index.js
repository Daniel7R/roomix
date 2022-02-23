import reactDom from "react-dom";
import React from 'react';
import { App } from './routes/App.jsx';
import { BrowserRouter as Router } from 'react-router-dom'

reactDom.render(
    <Router>
        <App />
    </Router>,
    document.getElementById("root")
);