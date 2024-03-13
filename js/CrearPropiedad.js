import { db, storage } from "./firebaseConfig.js";
import { ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-storage.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";


// Función para agregar una propiedad con información de la foto
function agregarPropiedadConFoto(nombre, tipo, precio, direccion, bedrooms, bathrooms, area, floor, parking, fotoURL) {
    // Agregar la propiedad a Firestore
    addDoc(collection(db, "propiedades"), {
        nombre: nombre,
        tipo: tipo,
        precio: precio,
        direccion: direccion,
        bedrooms: bedrooms,
        bathrooms: bathrooms,
        area: area,
        floor: floor,
        parking: parking,
        fotoURL: fotoURL // Almacenar el enlace de la foto
    })
    .then(function(docRef) {
        console.log("Propiedad agregada con ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error al agregar propiedad: ", error);
    });
}
  
function subirFoto(fotoFile) {
const fotoRef = ref(storage, 'propiedades/foto.jpg');

return uploadBytes(fotoRef, fotoFile)
    .then((snapshot) => {
        console.log('Foto subida correctamente');
        return getDownloadURL(snapshot.ref);
    })
    .catch((error) => {
        console.error("Error al subir foto: ", error);
        throw error;
    });
}


  // Obtener referencia a los elementos del formulario
const form = document.getElementById('inventory-form');
const nombreInput = document.getElementById('nombre');
const tipoInput = document.getElementById('tipo');
const precioInput = document.getElementById('precio');
const direccionInput = document.getElementById('direccion');
const habitacionesInput = document.getElementById('habitaciones');
const banosInput = document.getElementById('baños');
const areaInput = document.getElementById('area');
const pisoInput = document.getElementById('piso');
const estacionamientoInput = document.getElementById('estacionamiento');
const fotoInput = document.getElementById('foto');

// Agregar evento de escucha para el envío del formulario
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto
  
    // Obtener los valores de los campos del formulario
    const nombre = nombreInput.value;
    const tipo = tipoInput.value;
    const precio = parseInt(precioInput.value);
    const direccion = direccionInput.value;
    const habitaciones = parseInt(habitacionesInput.value);
    const banos = parseInt(banosInput.value);
    const area = areaInput.value;
    const piso = parseInt(pisoInput.value);
    const estacionamiento = parseInt(estacionamientoInput.value);
    const fotoFile = fotoInput.files[0]; // Obtener el archivo de imagen
  
    // Validar que se haya seleccionado una imagen
    if (fotoFile) {
      // Subir la foto al Firebase Storage
      subirFoto(fotoFile)
        .then(function(fotoURL) {
          // Llamar a la función para agregar la propiedad con el enlace de la foto
          agregarPropiedadConFoto(nombre, tipo, precio, direccion, habitaciones, banos, area, piso, estacionamiento, fotoURL);
          // Mostrar mensaje de éxito en la consola
          console.log("Propiedad creada correctamente.");
        })
        .catch(function(error) {
          console.error("Error al subir foto: ", error);
          // Mostrar mensaje de error en la consola
          console.error("Error al crear la propiedad. Por favor, inténtalo de nuevo.");
        });
    } else {
      console.error("Debes seleccionar una foto.");
      // Mostrar mensaje de error en la consola
      console.error("Debes seleccionar una foto.");
    }
  });
  