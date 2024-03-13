// firebaseConfig.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-storage.js"; // Importar la funcionalidad de Firebase Storage

const firebaseConfig = {
  apiKey: "AIzaSyDRH5LM8YxNPpoi2XLFvBtkJu535zT3rq0",
  authDomain: "inmobiliaria-b0b11.firebaseapp.com",
  projectId: "inmobiliaria-b0b11",
  storageBucket: "inmobiliaria-b0b11.appspot.com",
  messagingSenderId: "822813993685",
  appId: "1:822813993685:web:68d8b19b3c5ade1d17d05c"
};

// Inicializar Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app); // Inicializar Firebase Storage y exportarlo
