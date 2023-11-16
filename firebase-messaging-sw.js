importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyBEIX5-TxHg9QFBLPb56WVZpGM050HesHk",
  authDomain: "wonosobo-stores.firebaseapp.com",
  projectId: "wonosobo-stores",
  storageBucket: "wonosobo-stores.appspot.com",
  messagingSenderId: "17853634630",
  appId: "1:17853634630:web:2b243543b6df123c2fd247",
  measurementId: "G-DFG7QGJ8LB"
});

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
  console.log("onBackgroundMessage", message);
});