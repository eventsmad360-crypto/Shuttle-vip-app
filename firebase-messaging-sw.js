/* Shuttle VIP · Firebase Messaging Service Worker */
importScripts('https://www.gstatic.com/firebasejs/12.18.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/12.18.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCI5CT7cRSE2XHWCxs4mt6dWLFAqLWMxBA",
  authDomain: "shuttle-vip.firebaseapp.com",
  projectId: "shuttle-vip",
  storageBucket: "shuttle-vip.firebasestorage.app",
  messagingSenderId: "326953191593",
  appId: "1:326953191593:web:2e90b4dd97368530d9c1b8"
});

firebase.messaging();

/*
  Para la primera prueba no añadimos un onBackgroundMessage personalizado.
  Cuando Firebase Console envía una notificación con payload de notificación,
  Firebase Messaging la presenta en segundo plano automáticamente.
*/
