import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import store from "./components/Redux/redux-state";

const rerenderComponents = (state) => {
    const container = document.getElementById('root');
    const root = createRoot(container)
    createRoot(container).render(
        <React.StrictMode>
            <App
                store={store}
                dispatch={store.dispatch.bind(store)}
            />
        </React.StrictMode>
    );
}

rerenderComponents(store.getState());

store.subscribe(() => {
    const state = store.getState();
    rerenderComponents(state);
}); 
