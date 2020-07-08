import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCL_nb3HqD0xAXAbS2VGKMcS3ZXqPilvL8",
    authDomain: "todo-list-3468b.firebaseapp.com",
    databaseURL: "https://todo-list-3468b.firebaseio.com",
    projectId: "todo-list-3468b",
    storageBucket: "todo-list-3468b.appspot.com",
    messagingSenderId: "713277712074",
    appId: "1:713277712074:web:2a2e7ac56bdc780cfb3633",
    measurementId: "G-8NDYECKXSM"
  };

firebase.initializeApp(firebaseConfig);
export default firebase;