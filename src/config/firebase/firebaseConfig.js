/**
 * Created by Admin on 12/29/2016.
 */
import firebase from 'firebase';


const firebaseConfig = {
    apiKey: 'AIzaSyBsVVpEDrlNPEmshLcmOuE0FxhjPn0AqMg',
    authDomain: 'todo-react-redux.firebaseapp.com',
    databaseURL: 'https://todo-react-redux.firebaseio.com',
    storageBucket: 'firebase-todo-react-redux.appspot.com'
};


export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firebaseAuth = firebaseApp.auth();
export const firebaseDb = firebaseApp.database();