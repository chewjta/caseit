import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCZP80dW9foi5znzbV-E4xy_M8hlnkHz4A",
  authDomain: "ecomm-23f2e.firebaseapp.com",
  databaseURL: "https://ecomm-23f2e.firebaseio.com",
  projectId: "ecomm-23f2e",
  storageBucket: "ecomm-23f2e.appspot.com",
  messagingSenderId: "944197233555",
  appId: "1:944197233555:web:883ddf9180e771aebd9666",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
