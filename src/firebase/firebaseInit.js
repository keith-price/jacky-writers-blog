import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyATApbXwj-DzQCDKkBz9wB70Agm6oS8Z-o",
  authDomain: "jacky-writing-blog.firebaseapp.com",
  projectId: "jacky-writing-blog",
  storageBucket: "jacky-writing-blog.appspot.com",
  messagingSenderId: "734718148352",
  appId: "1:734718148352:web:59362e2836723954d1fde5",
  measurementId: "G-YY1XQWMKC7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };

export default firebaseApp.firestore;
