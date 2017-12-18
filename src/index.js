import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';

import 'jquery/';
import 'bootstrap/dist/js/bootstrap.min';
import './assets/css/master.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
