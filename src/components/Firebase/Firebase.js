import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCi7AtQeg7ypnGXsNEvchercoV7MiqCEec",
  authDomain: "streak-remastered.firebaseapp.com",
  projectId: "streak-remastered",
  storageBucket: "streak-remastered.appspot.com",
  messagingSenderId: "167878332455",
  appId: "1:167878332455:web:633b848db77b7eb30e7e02",
  measurementId: "G-6F8YR0PJKW"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const db = app.firestore();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const signInWithGoogle = async (e) => {
  try {
    e.preventDefault()
    const res = await auth.signInWithPopup(googleProvider);
    const user = res.user;
    const query = await db
      .collection("users")
      .where("uid", "==", user.uid)
      .get();
    if (query.docs.length === 0) {
      await db.collection("users").doc(user.uid).set({
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
        tracker: 0,
        planner: [],
        likedWorkouts: [],
        highscore: 0
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const signInWithEmailAndPassword = async ( email, password) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };
  const registerWithEmailAndPassword = async (name, email, password) => {
    try {
      const res = await auth.createUserWithEmailAndPassword(email, password);
      const user = res.user;
      await db.collection("users").doc(user.uid).set({
        uid: user.uid,
        name,
        authProvider: "local",
        email,
        tracker: 0,
        planner: [],
        likedWorkouts: [],
        highscore: 0
      });
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };
  const sendPasswordResetEmail = async (email) => {
    try {
      await auth.sendPasswordResetEmail(email);
      alert("Password reset link sent!");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };
  const logout = () => {
    auth.signOut();
  };
  const gituser = async (user) => {
      try {
        const query = await db
        .collection('users')
        .where('uid', '==', user?.uid)
        .get();
        let newUser;
        query.forEach(async (doc) => {
          newUser = {
            name: doc.data().name,
            email: doc.data().email,
            uid: doc.data().uid,
            likedWorkouts: doc.data().likeWorkouts,
            tracker: doc.data().tracker,
            planner: doc.data().planner,
            highscore: doc.data().highscore
          }
        })
        return newUser
      } catch (error) {
        console.error(error)
      }
  }

  export {
    auth,
    db,
    signInWithGoogle,
    signInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordResetEmail,
    logout,
    gituser,
  };