import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//import Welcome from './Welcome'
// function tick(){
//     const element = (
           
//         <div>
//             <h1>Hello,world!</h1>
//             <h2>It is {new Date().toLocaleTimeString()}.</h2>
//         </div>
//     );
    
    ReactDOM.render(
    <App name="franks"/>,
    document.getElementById('root')
);
//}

// setInterval(tick,1000);