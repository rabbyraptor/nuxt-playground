import * as firebase from "firebase/app";
import 'firebase/firestore'

if (!firebase.apps.length) {
    const firebaseConfig = {
        apiKey: process.env.GFB_API_KEY,
        authDomain: process.env.GFB_AUTH_DOMAIN,
        databaseURL: process.env.GFB_DATABASE_URL,
        projectId: process.env.GFB_PROJECT_ID,
        storageBucket: process.env.GFB_STORAGE_BUCKET,
        messagingSenderId: process.env.GFB_MESSAGING_SENDER_ID,
        appId: process.env.GFB_APP_ID
    };
    firebase.initializeApp(firebaseConfig)
}
const fireDb = firebase.firestore()
export { fireDb }