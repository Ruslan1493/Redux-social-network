import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import store from "./components/Redux/redux-state";
import StoreContext from './components/StoreContext';

const rerenderComponents = (state) => {
    const container = document.getElementById('root');
    createRoot(container).render(
        <React.StrictMode>
            <StoreContext.Provider value={store} >
                <App />
            </StoreContext.Provider>
        </React.StrictMode>
    );
}

rerenderComponents(store.getState());

store.subscribe(() => {
    const state = store.getState();
    rerenderComponents(state);
}); 
