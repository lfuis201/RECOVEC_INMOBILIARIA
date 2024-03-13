// auth.js
import { auth } from "./firebaseConfig.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  signInWithEmailAndPassword(auth, email, password)
    .then(function(userCredential) {
      // Inicio de sesión exitoso
      var user = userCredential.user;
      console.log('Inicio de sesión exitoso:', user);
      // Aquí puedes redirigir a otra página o realizar otras acciones después del inicio de sesión
      window.location.href = "../views/admin.html";
    })
    .catch(function(error) {
      // Manejo de errores
      var errorCode = error.code;
      var errorMessage = error.message;
      console.error('Error de inicio de sesión:', errorMessage);
    });
});
