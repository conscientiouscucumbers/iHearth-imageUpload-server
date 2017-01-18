// // ## ver1 using only react-router
// // index.js
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { browserHistory } from 'react-router'

// import Routes from './routes';

// import './index.css';

// ReactDOM.render(
//   <Routes history={browserHistory} />,
//   document.getElementById('root')
// );


// // ## ver2 using redux, reudx-form
// import React from 'react';
// import { render, } from 'react-dom';
// import { createStore, combineReducers, } from 'redux';
// import { Provider, } from 'react-redux';
// import { reducer as formReducer, } from 'redux-form';

// import App from './App';

// const reducer = combineReducers({
//   form: formReducer,
// });

// function configureStore(initialState) {
//   return createStore(reducer, initialState);
// }

// const store = configureStore({});

// render(
//   <Provider store={ store }>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );

// ## ver3 using react router, redux-form


// // ## ver2 using redux, reudx-form
import React from 'react';
import { render, } from 'react-dom';
import { createStore, combineReducers, } from 'redux';
import { Provider, } from 'react-redux';
import { reducer as formReducer, } from 'redux-form';
import { browserHistory } from 'react-router'
import Routes from './routes';
// import './index.css';

// import App from './App';

const reducer = combineReducers({
  form: formReducer,
});

function configureStore(initialState) {
  return createStore(reducer, initialState);
}

const store = configureStore({});

render(
  <Provider store={ store }>
    <Routes history={browserHistory} />
  </Provider>,
  document.getElementById('root')
);

