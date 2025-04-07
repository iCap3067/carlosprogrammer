
const fragment = document.createDocumentFragment();
// Abrir y cerrar el modal

function openDialog() {
    document.getElementById("formDialog").showModal();
};
function closeDialog() {
    document.getElementById("formDialog").close();
    limpiarFormulario();
}
// Formulario
const formulario = document.getElementById("formulario");

const formName = formulario.querySelector("#formName");
const formAge = formulario.querySelector("#formAge");
const formOccupation = formulario.querySelector("#formOccupation");
const formDescription = formulario.querySelector("#formDescription");
const formEmail = formulario.querySelector("#formEmail");
// Seleccion de alertas
const alertName = document.getElementById("alertName");
const alertEmail = document.getElementById("alertEmail");
const alertAge = document.getElementById("alertAge");
const alertOccupation = document.getElementById("alertOccupation");
const alertDescription = document.getElementById("alertDescription");

const alertSuccess = document.getElementById("alertSuccess");
// Simple referencia para acceder a nuestras expresiones regulares mas facil
const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;
const regUserAge = /^[0-9]+$/;
const regUserOccupation = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regUserDescription = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
// Esta es nuestra funcion para representar nuestro mensaje de exito
const pintarMensajeExito = () => {
    alertSuccess.classList.remove("d-none")
    alertSuccess.textContent = "Parametros validos para la creacion de su carta, por favor presione crear!"
};
// Esta funcion se encarga de cambiar las clases de nuestro documento base
// para asi mostrar elementos no visibles inicialmente
const pintarMensajeError = (errores) => {
    errores.forEach((item) => {
        item.tipo.classList.remove("d-none");
        item.tipo.classList.add("is-invalid")
        item.tipo.textContent = item.msg;
    });
};
// Aca captamos un escuchador de eventos a nuestro submit y las instrucciones
// a seguir al momento de presionarlo

const newCard = document.getElementById("newCard");

newCard.addEventListener("click", (e) => {
    // console.log("Formulario enviado!")
    // con el preventDefault() nos encargamos de cancelar cada evento
    // predeterminado al que este sujeto el SUBMIT
    const errores = [];
    e.preventDefault();
    alertSuccess.classList.add("d-none");
    // Validacion del formName
    if (!regUserName.test(formName.value) || !formName.value.trim()) {
        formName.classList.add("is-invalid")
        errores.push({
            tipo: alertName,
            msg: "Formato no valido en el campo nombre, solo letras",
        });
    } else {
        formName.classList.remove("is-invalid");
        formName.classList.add("is-valid");
        alertName.classList.add("d-none");

    }
    // Validacion de la edad, formAge
    if (!regUserAge.test(formAge.value) || !formAge.value.trim()) {
        formAge.classList.add("is-invalid")
        errores.push({
            tipo: alertAge,
            msg: "Formato no valido en el campo edad, solo numeros",
        });
    } else {
        formAge.classList.remove("is-invalid");
        formAge.classList.add("is-valid");
        alertAge.classList.add("d-none");
    }
    // Validacion de la ocupacion, formOccupation
    if (!regUserOccupation.test(formOccupation.value) || !formOccupation.value.trim()) {
        formOccupation.classList.add("is-invalid")
        errores.push({
            tipo: alertOccupation,
            msg: "Formato no valido en el campo edad, solo letras",
        });
    } else {
        formOccupation.classList.remove("is-invalid");
        formOccupation.classList.add("is-valid");
        alertOccupation.classList.add("d-none");
    }
    // Validacion de la ocupacion, formOccupation
    if (!regUserDescription.test(formDescription.value) || !formDescription.value.trim()) {
        formDescription.classList.add("is-invalid")
        errores.push({
            tipo: alertDescription,
            msg: "Formato no valido para su descripcion, solo debe utilizar letras",
        });
    } else {
        formDescription.classList.remove("is-invalid");
        formDescription.classList.add("is-valid");
        alertDescription.classList.add("d-none");
    }
    // Validacion del correo, formEmail
    if (!regUserEmail.test(formEmail.value) || !formEmail.value.trim()) {
    formEmail.classList.add("is-invalid")
    errores.push({
        tipo: alertEmail,
        msg: "Por favor ingrese un correo valido",
    });
    } else {
        formEmail.classList.remove("is-invalid");
        formEmail.classList.add("is-valid");
        alertEmail.classList.add("d-none");
    }
    if (errores.length !== 0) {
        pintarMensajeError(errores);
        console.log("No son adecuados los parametros");
        return;
    }
    pintarMensajeExito();
    agregarCarta();
    
});
// Vamos a proceder con nuestro carrusel y las cartas que seran protagonistas en su funcionalidad
let almacenCartas = [];
/* function newCard() {
const boton = document.getElementById("newCard")
// boton.disabled = false;
boton.addEventListener("click", (e) => {
    agregarCarta()
});
}; */
let contadorBorde = document.querySelector("#carrusel #contadorBorde .currentCards");
function actualizarContador(cantidad) {
    contadorBorde.textContent = cantidad;
};

const agregarCarta = (e) => {
    document.getElementById("carrusel").classList.remove("d-none");
    const card = {
        id: formName.value,
        nombre: formName.value,
        edad: formAge.value,
        ocupacion: formOccupation.value,
        descripcion: formDescription.value,
        email: formEmail.value,
    };
    const indice = almacenCartas.length;
    
    if (card.id === "") {
        console.log("NO HAY QUE CREAR NINGUNA CARTA, no puedo hacer cards en blanco");
        closeDialog();
    };
    if(indice === 0 && card.id !== "") {
        almacenCartas.push(card);
        console.log("NO SE ENCONTRO SIMILITUD, entonces se agrego la primera carta");
        pintarCartas();
        botonTemplate();
    } 
    
    if (indice >= 1 && card.id !== "") {
            almacenCartas.push(card);
            console.log("Aqui crearas una carta hija porque ya existe la primera carta");
            botonTemplateHija();
            pintarCartasHijas();
        };

    console.log(almacenCartas);
    closeDialog();
    actualizarContador(almacenCartas.length);
    limpiarFormulario();
};
const limpiarFormulario = (e) => {
   formName.value = "";
   formName.classList.remove("is-valid");
   formName.classList.remove("is-invalid");
   formAge.value = "";
   formAge.classList.remove("is-valid");
   formAge.classList.remove("is-invalid");
   formOccupation.value = "";
   formOccupation.classList.remove("is-valid");
   formOccupation.classList.remove("is-invalid");
   formDescription.value = "";
   formDescription.classList.remove("is-valid");
   formDescription.classList.remove("is-invalid");
   formEmail.value = "";
   formEmail.classList.remove("is-valid");
   formEmail.classList.remove("is-invalid");
   alertSuccess.classList.add("d-none")

   alertName.classList.add("d-none");
   alertAge.classList.add("d-none");
   alertOccupation.classList.add("d-none");
   alertDescription.classList.add("d-none");
   alertEmail.classList.add("d-none");
};
const almacenCards = document.getElementById("almacenCards");

const fragment2 = document.createDocumentFragment();
const template = document.getElementById("template");
const pintarCartas = () => {
    almacenCartas.forEach((item) => {
        const clone = template.content.cloneNode(true);
        clone.querySelector(".nombreUser").textContent = item.nombre;
        clone.querySelector(".edadUser").textContent = item.edad;
        clone.querySelector(".ocupacionUser").textContent = item.ocupacion;
        clone.querySelector(".descripcionUser").textContent = item.descripcion;
        clone.querySelector(".emailUser").textContent = item.email;
        fragment2.appendChild(clone);
    });
    almacenCards.appendChild(fragment2);
};

let arraySinPrimero = [];
function procesarArraySinPrimero(array, n) {
    arraySinPrimero = array.slice(n);
};
let f = 1;

const templateHija = document.getElementById("templateHija");
const pintarCartasHijas = () => {
    /* almacenCartas.shift(); */
    
    procesarArraySinPrimero(almacenCartas,f);

    console.log(arraySinPrimero);

    arraySinPrimero.forEach((item) => {
        const clone = templateHija.content.cloneNode(true);
        clone.querySelector(".nombreUser").textContent = item.nombre;
        clone.querySelector(".edadUser").textContent = item.edad;
        clone.querySelector(".ocupacionUser").textContent = item.ocupacion;
        clone.querySelector(".descripcionUser").textContent = item.descripcion;
        clone.querySelector(".emailUser").textContent = item.email;
        fragment.appendChild(clone);
        f = f + 1;
    });
    almacenCards.appendChild(fragment);
};
/* const btnTemplateHija = document.getElementById("botonTemplateHija"); */
const almacenBotones = document.getElementById("almacenBotones");
let templateUnico2 = "";
const botonTemplate = () => {
    const dato1 = almacenCartas.length - 1;
    const dato2 = almacenCartas.length;
    templateUnico2 = `<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${dato1}" class="active" aria-current="true" aria-label="Slide ${dato2}"></button>`
    almacenBotones.insertAdjacentHTML("beforeend",templateUnico2);

};
let templateUnico = "";
const botonTemplateHija = () => {
    const dato1 = almacenCartas.length - 1;
    const dato2 = almacenCartas.length;
    templateUnico = `<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${dato1}" aria-label="Slide ${dato2}"></button>`
    almacenBotones.insertAdjacentHTML("beforeend",templateUnico);
};


// Ahora hare funcionales los botones dentro de las tarjetas

function edit(button) {
    const card = button.closest('.card');
  
    const nombreUserElement = card.querySelector('.nombreUser');
    const edadUserElement = card.querySelector('.edadUser');
    const ocupacionUserElement = card.querySelector('.ocupacionUser');
    const descripcionUserElement = card.querySelector('.descripcionUser');
    const emailUserElement = card.querySelector('.emailUser');
    /* formEditDialog */
    const nuevoNombre = prompt(
      'Ingrese el nuevo nombre:',
      nombreUserElement.textContent
    );
    const nuevaEdad = prompt('Ingrese la nueva edad:', edadUserElement.textContent);
    const nuevaOcupacion = prompt(
      'Ingrese la nueva ocupación:',
      ocupacionUserElement.textContent
    );
    const nuevaDescripcion = prompt(
      'Ingrese la nueva descripción:',
      descripcionUserElement.textContent
    );
    const nuevoEmail = prompt(
      'Ingrese el nuevo correo electrónico:',
      emailUserElement.textContent
    );
    nombreUserElement.textContent = nuevoNombre;
    edadUserElement.textContent = nuevaEdad;
    ocupacionUserElement.textContent = nuevaOcupacion;
    descripcionUserElement.textContent = nuevaDescripcion;
    emailUserElement.textContent = nuevoEmail;
    preventDefault();
}
// Funcionalidad para eliminar cartas y botones
const eliminar = (elemento) => {
    const elementoEliminado = elemento.closest(".carouselComun");
    elementoEliminado.remove();
    
    eliminarUltimoBoton(almacenBotones);
    actualizarContador(almacenCartas.length - 1);

    almacenCartas.pop();
    /* refrescarDiv() */
};
function eliminarUltimoBoton(div) {
    if (div) {
        const botones = div.querySelectorAll('button');
        if (botones.length > 0) {
            const ultimoBoton = botones[botones.length - 1];
            ultimoBoton.remove();
        } else {
            console.log('El div no contiene botones.');
        }
    } else {
        console.log('El div proporcionado no es válido.');
    }
}

function refrescarDiv() {
    const miDiv = document.getElementById("almacenBotones");
    miDiv.innerHTML = "Nuevo contenido del div: " + new Date().toLocaleTimeString();
  }
  
  // Llama a la función para refrescar el div
  

