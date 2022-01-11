import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBJ7J6dQ5gHN0hmpa5IB4GRFvljgTqOlms",
  authDomain: "konstig-d859b.firebaseapp.com",
  projectId: "konstig-d859b",
  storageBucket: "konstig-d859b.appspot.com",
  messagingSenderId: "50957271326",
  appId: "1:50957271326:web:4d4a15f3e7c40123bac90f"
};

const app = initializeApp(firebaseConfig);

function getFireStoreData() {
    return app
}

export default getFireStoreData;