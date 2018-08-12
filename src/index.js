import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import config from './config.js';
import scales from './scales.js';
import Mesure from './components/Mesure/Mesure';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Mesure config={config} scale={scales.C} running={true}/>, document.getElementById('root'));
// registerServiceWorker();