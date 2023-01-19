import firebase from 'firebase' 


var config = {
    apiKey: "AIzaSyDH7JRgDAwguYlWvexZnXB1zGQKLYjlgBQ",
    authDomain: "photowall-33cbf.firebaseapp.com",
    projectId: "photowall-33cbf",
    storageBucket: "photowall-33cbf.appspot.com",
    messagingSenderId: "318406581989",
    appId: "1:318406581989:web:a2103c20c7d03aeba43e0c",
    measurementId: "G-864P7ZGTB1"
  };
  
  firebase.initializeApp(config) 

  const database = firebase.database()

  export {database}