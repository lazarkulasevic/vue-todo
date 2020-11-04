import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBKZDbDqxhtCLpwCIEDkbcz8jN0hk0G6Io",
  authDomain: "lazars-vue-todo.firebaseapp.com",
  databaseURL: "https://lazars-vue-todo.firebaseio.com",
  projectId: "lazars-vue-todo",
  storageBucket: "lazars-vue-todo.appspot.com",
  messagingSenderId: "1030940214846",
  appId: "1:1030940214846:web:6f317dcdac93285d86336f"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const firestore = firebaseApp.firestore();
firestore.settings({ timestampsInSnapshots = true});

export default firestore;
