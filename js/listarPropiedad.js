// propertyList.js

import { db } from "./firebaseConfig.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";

const propertyList = document.getElementById("propertyList");

// Función para obtener y mostrar las propiedades
async function displayProperties() {
    const querySnapshot = await getDocs(collection(db, "propiedades"));
    
    querySnapshot.forEach(doc => {
        const property = doc.data();
        const html = `
            <div class="col-lg-4 col-md-6">
                <div class="item">
                    <a href="property-details.html"><img src="${property.fotoURL}" alt=""></a>
                    <span class="category">${property.tipo}</span>
                    <h6>$${property.precio}</h6>
                    <h4><a href="property-details.html">${property.direccion}</a></h4>
                    <ul>
                        <li>Bedrooms: <span>${property.bedrooms}</span></li>
                        <li>Bathrooms: <span>${property.bathrooms}</span></li>
                        <li>Area: <span>${property.area}m2</span></li>
                        <li>Floor: <span>${property.floor}</span></li>
                        <li>Parking: <span>${property.parking} spots</span></li>
                    </ul>
                    <div class="main-button">
                        <a href="property-details.html">Agendar cita</a>
                    </div>
                </div>
            </div>
        `;
        propertyList.innerHTML += html;
    });
}

displayProperties();