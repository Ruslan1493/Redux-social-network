import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import store from "./components/Redux/redux-state";
import { Provider } from 'react-redux';

const rerenderComponents = (state) => {
    const container = document.getElementById('root');
    createRoot(container).render(
        <React.StrictMode>
            <Provider store={store} >
                <App />
            </Provider>
        </React.StrictMode>
    );
}

rerenderComponents(store.getState());

store.subscribe(() => {
    const state = store.getState();
    rerenderComponents(state);
}); 
