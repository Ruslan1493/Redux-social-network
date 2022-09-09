import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import store from "./components/Redux/state";

const rerenderComponents = (state) => {
    const container = document.getElementById('root');
    const root = createRoot(container)
    root.render(
        <React.StrictMode>
            <App
                state={state}
                addPost={store.addPost.bind(store)}
                updateNewPostText={store.updateNewPostText.bind(store)}
                newPostText={store.getState().profilePage.newPostText}
            />
        </React.StrictMode>
    );
}

rerenderComponents(store.getState());

store.subscriber(rerenderComponents);
