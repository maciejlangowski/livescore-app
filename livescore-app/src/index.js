import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyBlmCsE-fbM3-NFAvXdkqDp75CxxL9yus0",
  authDomain: "livescore-app-8a845.firebaseapp.com",
  databaseURL: "https://livescore-app-8a845.firebaseio.com",
  projectId: "livescore-app-8a845",
  storageBucket: "livescore-app-8a845.appspot.com",
  messagingSenderId: "897672722687",
  appId: "1:897672722687:web:0b1e1c00136915977b34ca"
};

export const DATABASE_URL = firebaseConfig.databaseURL;

firebase.initializeApp(firebaseConfig); 

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
