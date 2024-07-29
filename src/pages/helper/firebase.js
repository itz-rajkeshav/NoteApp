import { initializeApp } from "firebase/app";
// import { getAuth} from "firebase/auth";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCPrhfJzIhHUy6symD_8Sdn1RcEXr80zQQ",
  authDomain: "noteapp-1375.firebaseapp.com",
  projectId: "noteapp-1375",
  storageBucket: "noteapp-1375.appspot.com",
  messagingSenderId: "125365154172",
  appId: "1:125365154172:web:6371e64d34a771088f34f9",
  measurementId: "G-ZEV44PFC8J",
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
// const analytics = getAnalytics(app);
// export { auth, provider };
