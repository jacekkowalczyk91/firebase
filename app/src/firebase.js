import firebase from 'firebase'

let config = {
    apiKey: "AIzaSyBOrml7E_GWghGOvJyXXAIUldFOSu_N2Xc",
    authDomain: "my-project-56f4f.firebaseapp.com",
    databaseURL: "https://my-project-56f4f.firebaseio.com",
    projectId: "my-project-56f4f",
    storageBucket: "my-project-56f4f.appspot.com",
    messagingSenderId: "975411886262"
};

let firebaseApp =  firebase.initializeApp(config);

export const database = firebaseApp.database();
export default firebaseApp