import app from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA4bpgNJjp0HeXDZ0ipbtMUmsAIZ8cwC-I",
  authDomain: "la-hacks-react.firebaseapp.com",
  databaseURL: "https://la-hacks-react.firebaseio.com",
  projectId: "la-hacks-react",
  storageBucket: "la-hacks-react.appspot.com",
  messagingSenderId: "341582099300"
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
    this.db = app.database();

    this.googleProvider = new app.auth.GoogleAuthProvider();
  }

  doSignInWithGoogle = () => this.auth.signInWithPopup(this.googleProvider);

  doSignOut = () => this.auth.signOut();
}

export default Firebase;
