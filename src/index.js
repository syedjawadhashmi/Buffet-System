/**
 * Created by Admin on 12/28/2016.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

//import { initAuth } from './core/auth';
import configureStore from './store/store';
import Root from './config/routes/routes';



const store = configureStore();
const syncedHistory = syncHistoryWithStore(browserHistory, store);
const rootElement = document.getElementById('root');


    ReactDOM.render(
    <AppContainer>
    <Root history={syncedHistory} store={store} />
        </AppContainer>,
        rootElement
);


/*if (module.hot) {
    module.hot.accept('./config/routes/routes', () => {
        render(require('./config/routes/routes').default);
});
}*/

/*
initAuth(store.dispatch)
    .then(() => render(Root))
.catch(error => console.error(error)); // eslint-disable-line no-console
*/
