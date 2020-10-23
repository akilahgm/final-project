import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Root from './components/Root';
import configureStore, { history } from './store/configureStore';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Root store={store} history={history} />
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();

// import React from 'react';
// import './App.css';
// import Root from './components/Root';
// import { render } from 'react-dom';
// import { AppContainer } from 'react-hot-loader';
// import configureStore, { history } from './store/configureStore';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const store = configureStore();

// render(
//   <AppContainer>
//     <Root store={store} history={history} />
//   </AppContainer>,
//   document.getElementById('app')
// );

// if (module.hot) {
//   module.hot.accept('./components/Root', () => {
//     const NewRoot = require('./components/Root').default;
//     render(
//       <AppContainer>
//         <NewRoot store={store} history={history} />
//       </AppContainer>,
//       document.getElementById('app')
//     );
//   });
// }
