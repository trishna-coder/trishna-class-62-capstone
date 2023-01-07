import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyCl0zMzWj31yHon-2zJzch1kldm83Sv9wg",
  authDomain: "byju-project-60-attendance-app.firebaseapp.com",
  databaseURL: "https://byju-project-60-attendance-app-default-rtdb.firebaseio.com",
  projectId: "byju-project-60-attendance-app",
  storageBucket: "byju-project-60-attendance-app.appspot.com",
  messagingSenderId: "748658685045",
  appId: "1:748658685045:web:b06f2d278dcd04d119743c"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}
export default firebase.database()