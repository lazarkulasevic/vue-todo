import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyBKZDbDqxhtCLpwCIEDkbcz8jN0hk0G6Io",
  authDomain: "lazars-vue-todo.firebaseapp.com",
  databaseURL: "https://lazars-vue-todo.firebaseio.com",
  projectId: "lazars-vue-todo",
  storageBucket: "lazars-vue-todo.appspot.com",
  messagingSenderId: "1030940214846",
  appId: "1:1030940214846:web:6f317dcdac93285d86336f"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
