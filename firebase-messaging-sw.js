importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js");

firebase.initializeApp({
    apiKey: "AIzaSyDpyoOva_s47LmLs2A9DTj01xbrrAtRvwI",
    authDomain: "sobo-apps.firebaseapp.com",
    projectId: "sobo-apps",
    storageBucket: "sobo-apps.appspot.com",
    messagingSenderId: "469480833254",
    appId: "1:469480833254:web:fe120dd90d9ceb1d507b27",
    measurementId: "G-5KPQVYX46X"
});

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
  console.log("onBackgroundMessage", message);
});