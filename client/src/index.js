import React from 'react';
import ReactDOM from 'react-dom';
import MaterializeCSS from 'materialize-css/dist/css/materialize.min.css'
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
