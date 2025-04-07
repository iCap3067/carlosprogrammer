// Boton principal funcionalidad
function openDialog() {
    if (almacenCards.length < 5) {
        document.getElementById("formDialog").showModal();
    } else {
        document.getElementById("infoDialog").showModal();
    };
};
function closeInfoDialog() {
    document.getElementById("infoDialog").close();
}
function closeDialog() {
    document.getElementById("formDialog").close();
    limpiarFormulario();
}
// Validacion del formulario
// Formulario
const formulario = document.getElementById("formulario");

const formName = formulario.querySelector("#formName");
const formLastName = formulario.querySelector("#formLastName");
const formAge = formulario.querySelector("#formAge");
const formOccupation = formulario.querySelector("#formOccupation");
const formDescription = formulario.querySelector("#formDescription");
const formEmail = formulario.querySelector("#formEmail");
// Seleccion de alertas
const alertName = document.getElementById("alertName");
const alertLastName = document.getElementById("alertLastName");
const alertEmail = document.getElementById("alertEmail");
const alertAge = document.getElementById("alertAge");
const alertOccupation = document.getElementById("alertOccupation");
const alertDescription = document.getElementById("alertDescription");
// Simple referencia para acceder a nuestras expresiones regulares mas facil
const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regUserLastName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;
const regUserAge = /^[0-9]+$/;
const regUserOccupation = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regUserDescription = /^[,-.-0-9-A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
// Esta funcion se encarga de cambiar las clases de nuestro documento base
// para asi mostrar elementos no visibles inicialmente
const pintarMensajeError = (errores) => {
    errores.forEach((item) => {
        item.tipo.classList.remove("d-none");
        item.tipo.classList.add("is-invalid")
        item.tipo.textContent = item.msg;
    });
};
newCard.addEventListener("click", (e) => {
    // console.log("Formulario enviado!")
    // con el preventDefault() nos encargamos de cancelar cada evento
    // predeterminado al que este sujeto el SUBMIT
    const errores = [];
    e.preventDefault();
    // Validacion del formName
    if (!regUserName.test(formName.value) || !formName.value.trim()) {
        formName.classList.add("is-invalid")
        errores.push({
            tipo: alertName,
            msg: "Formato no válido, solo letras",
        });
    } else {
        formName.classList.remove("is-invalid");
        formName.classList.add("is-valid");
        alertName.classList.add("d-none");
    }
    // Validacion del apellido, formLastName
    if (!regUserLastName.test(formLastName.value) || !formLastName.value.trim()) {
        formLastName.classList.add("is-invalid")
        errores.push({
            tipo: alertLastName,
            msg: "Formato no válido, solo letras",
        });
    } else {
        formLastName.classList.remove("is-invalid");
        formLastName.classList.add("is-valid");
        alertLastName.classList.add("d-none");
    }
    // Validacion de la edad, formAge
    if (!regUserAge.test(formAge.value) || !formAge.value.trim()) {
        formAge.classList.add("is-invalid")
        errores.push({
            tipo: alertAge,
            msg: "Formato no válido, solo numeros",
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
            msg: "Formato no válido, solo letras",
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
            msg: "Formato no válido, solo letras y numeros",
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
        msg: "Correo no válido",
    });
    } else {
        formEmail.classList.remove("is-invalid");
        formEmail.classList.add("is-valid");
        alertEmail.classList.add("d-none");
    }
    if (errores.length > 1) {
        document.querySelector("#formDialog").style.borderTopRightRadius = "0px";
        document.querySelector("#formDialog").style.borderBottomRightRadius = "0px";
    } else {
        document.querySelector("#formDialog").style.borderTopRightRadius = "25px";
        document.querySelector("#formDialog").style.borderBottomRightRadius = "65px";
    }

    if (errores.length !== 0) {
        pintarMensajeError(errores);
        console.log("No son adecuados los parámetros");
        return;
    }
    agregarCarta();
});
let almacenCards = [];
const agregarCarta = () => {
    const card = {
        id: formName.value,
        nombre: formName.value,
        apellido: formLastName.value,
        edad: formAge.value,
        ocupacion: formOccupation.value,
        descripcion: formDescription.value,
        email: formEmail.value,
    };
    const cantidad = almacenCards.length;
    if(cantidad === 0 && card.id !== "") {
        almacenCards.push(card);
/*         console.log("NO SE ENCONTRO SIMILITUD, entonces se agrego la primera carta"); */
        pintarCartas();
        closeDialog();
    };
    if(cantidad !== 0 && card.id !== "") {
        almacenCards.push(card);
/*         console.log("NO SE ENCONTRO SIMILITUD, entonces se agrego la siguiente carta"); */
        pintarCartas();
        closeDialog();
    }
};
const template = document.getElementById("template")
const galleryContainer = document.querySelector(".gallery-container");
const fragment = document.createDocumentFragment();
// Funcionalidad que manipula el DOM para mostrar nuestras cartas //
const pintarCartas = () => {
    const item = almacenCards[almacenCards.length - 1];
    const clone = template.content.cloneNode(true);
    clone.querySelector(".nombreUser").textContent = item.nombre;
    clone.querySelector(".apellidoUser").textContent = item.apellido;
    clone.querySelector(".edadUser").textContent = item.edad;
    clone.querySelector(".ocupacionUser").textContent = item.ocupacion;
    clone.querySelector(".descripcionUser").textContent = item.descripcion;
    clone.querySelector(".emailUser").textContent = item.email;
    const colorWheel = clone.querySelector(".color-wheel");
    const colorInput = clone.querySelector(".color-input");
    const colorInputBlanco = clone.querySelector(".color-input-blanco");
    /* console.log("colorInput:", colorInput); */

    colorWheel.addEventListener("click", () => {
        colorInput.click();
    });
    colorInput.addEventListener("input", (event) => {
        colorInput.closest(".gallery-item").style.color = colorInputBlanco.value;
        colorInput.closest(".gallery-item").style.textDecorationColor = "#ffffff";
        const selectedColor = event.target.value;
        colorInput.closest(".gallery-item").style.backgroundColor = selectedColor;
        /* if(selectedColor === "#FFFFFF") {
            colorInput.closest(".gallery-item").style.color = "#000000";
            colorInput.closest(".gallery-item").style.textDecorationColor = "#000000";
        }; */
    });
    fragment.appendChild(clone);
    galleryContainer.appendChild(fragment);
    document.querySelector(".cantidadCartas").textContent = almacenCards.length;
};
// La siguiente funcion limpia nuestro formulario para que cada vez que lo cerremos vuelva a su estado actual //
// sin que se conserven los valores anteriores //
    const limpiarFormulario = (e) => {
    formName.value = "";
    formName.classList.remove("is-valid");
    formName.classList.remove("is-invalid");
    formLastName.value = "";
    formLastName.classList.remove("is-valid");
    formLastName.classList.remove("is-invalid");
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
 
    alertName.classList.add("d-none");
    alertLastName.classList.add("d-none");
    alertAge.classList.add("d-none");
    alertOccupation.classList.add("d-none");
    alertDescription.classList.add("d-none");
    alertEmail.classList.add("d-none");
 };
 let elementoTargetGlobal = null;
 const openEditDialog = (elemento) => {
     elementoTargetGlobal = elemento;
     formEditDialog = document.getElementById("formEditDialog");
     formEditDialog.showModal();
 
     const nombre = elemento.querySelector(".nombreUser").textContent;
     const apellido = elemento.querySelector(".apellidoUser").textContent;
     const edad = elemento.querySelector(".edadUser").textContent;
     const ocupacion = elemento.querySelector(".ocupacionUser").textContent;
     const descripcion = elemento.querySelector(".descripcionUser").textContent;
     const email = elemento.querySelector(".emailUser").textContent;

     formEditDialog.querySelector("#editName").value = nombre;
     formEditDialog.querySelector("#editLastName").value = apellido;
     formEditDialog.querySelector("#editAge").value = edad;
     formEditDialog.querySelector("#editOccupation").value = ocupacion;
     formEditDialog.querySelector("#editDescription").value = descripcion;
     formEditDialog.querySelector("#editEmail").value = email;
 
     const editCardButton = formEditDialog.querySelector("#editCard");
     editCardButton.removeEventListener("click", handleEditCard);
     editCardButton.addEventListener("click", handleEditCard);
 };
 function handleEditCard() {
     if (elementoTargetGlobal) {
         // Debo remover la funcionalidad relacionada con los mensajes de errores y su revelacion en el formulario debido a que
         // solo quiero esa funcionalidad en el formulario principal //
         const pintarMensajeError = (errores2) => {
            errores2.forEach((item) => {
                console.log(item.msg);
            });
        };
        const errores2 = [];
        // Validacion del formName
        if (!regUserName.test(editName.value) || !editName.value.trim()) {
            editName.classList.add("is-invalid")
            errores2.push({
                msg: "Formato no válido, solo letras",
            });
        } else {
            editName.classList.remove("is-invalid");
            editName.classList.add("is-valid");    
        }
        // Validacion del apellido, editLastName
        if (!regUserLastName.test(editLastName.value) || !editLastName.value.trim()) {
            editLastName.classList.add("is-invalid")
            errores2.push({
                msg: "Formato no válido, solo letras",
            });
        } else {
            editLastName.classList.remove("is-invalid");
            editLastName.classList.add("is-valid");    
        }
        // Validacion de la edad, formAge
        if (!regUserAge.test(editAge.value) || !editAge.value.trim()) {
            editAge.classList.add("is-invalid")
            errores2.push({
                msg: "Formato no válido, solo numeros",
            });
        } else {
            editAge.classList.remove("is-invalid");
            editAge.classList.add("is-valid");
        }
        // Validacion de la ocupacion, formOccupation
        if (!regUserOccupation.test(editOccupation.value) || !editOccupation.value.trim()) {
            editOccupation.classList.add("is-invalid")
            errores2.push({
                msg: "Formato no válido, solo letras",
            });
        } else {
            editOccupation.classList.remove("is-invalid");
            editOccupation.classList.add("is-valid");
        }
        // Validacion de la ocupacion, formOccupation
        if (!regUserDescription.test(editDescription.value) || !editDescription.value.trim()) {
            editDescription.classList.add("is-invalid")
            errores2.push({
                msg: "Formato no válido, solo letras y numeros",
            });
        } else {
            editDescription.classList.remove("is-invalid");
            editDescription.classList.add("is-valid");
        }
        // Validacion del correo, formEmail
        if (!regUserEmail.test(editEmail.value) || !editEmail.value.trim()) {
        editEmail.classList.add("is-invalid")
        errores2.push({
            msg: "Correo no válido",
        });
        } else {
            editEmail.classList.remove("is-invalid");
            editEmail.classList.add("is-valid");
        }

        if (errores2.length !== 0) {
            pintarMensajeError(errores2);
            console.log("No son adecuados los parámetros");
            return;
        }
         const nombreEdit = formEditDialog.querySelector("#editName").value;
         const apellidoEdit = formEditDialog.querySelector("#editLastName").value;
         const edadEdit = formEditDialog.querySelector("#editAge").value;
         const ocupacionEdit = formEditDialog.querySelector("#editOccupation").value;
         const descripcionEdit = formEditDialog.querySelector("#editDescription").value;
         const emailEdit = formEditDialog.querySelector("#editEmail").value;
 
         elementoTargetGlobal.querySelector(".nombreUser").textContent = nombreEdit;
         elementoTargetGlobal.querySelector(".apellidoUser").textContent = apellidoEdit;
         elementoTargetGlobal.querySelector(".edadUser").textContent = edadEdit;
         elementoTargetGlobal.querySelector(".ocupacionUser").textContent = ocupacionEdit;
         elementoTargetGlobal.querySelector(".descripcionUser").textContent = descripcionEdit;
         elementoTargetGlobal.querySelector(".emailUser").textContent = emailEdit;
         closeEditDialog();
     };
 };
 function closeEditDialog() {
     document.getElementById("formEditDialog").close();
     elementoTargetGlobal = null;
 };
let currentIndex = 0;
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
prevButton.addEventListener('click', () => {
    navigate(-1);
});
nextButton.addEventListener('click', () => {
    navigate(1);
});
function navigate(direction) {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const totalImages = galleryItems.length;
    if (totalImages > 0) {
        currentIndex = (currentIndex + direction + totalImages) % totalImages;
        const offset = -currentIndex * 100;
        galleryContainer.style.transform = `translateX(${offset}%)`;
    };
};
function updateNavigationButtons() {
    const totalImages = document.querySelectorAll('.gallery-item').length;
    if (totalImages > 0) {
        prevButton.disabled = false;
        nextButton.disabled = false;
    } else {
        prevButton.disabled = true;
        nextButton.disabled = true;
    };
};
//AUTOPLAY
/* let autoplayInterval = null; */
/* function startAutoplay(interval) {
    stopAutoplay();  // Detiene cualquier autoplay anterior para evitar múltiples intervalos.
    autoplayInterval = setInterval(() => {
        navigate(1);  // Navega a la siguiente imagen cada intervalo de tiempo.
    }, interval);
    }
    function stopAutoplay() {
        clearInterval(autoplayInterval);
        }
// Iniciar autoplay con un intervalo de 3 segundos.
startAutoplay(3000); */
// Opcional: Detener autoplay cuando el usuario interactúa con los botones de navegación.
/* document.querySelectorAll('.nav-button').forEach(button => {
    button.addEventListener('click', stopAutoplay);
}); */
const mostradorCantidad = document.querySelector(".cantidadCartas");
let elementoDeleteTarget = null;

const eliminar = (elemento) => {
    const elementoEliminado = elemento.closest(".gallery-item");
    elementoDeleteTarget = elementoEliminado;
    const confirmDialog = document.getElementById("confirmDialog");
    confirmDialog.showModal();
    const deleteCardButton = confirmDialog.querySelector(".deleteCard");
    deleteCardButton.addEventListener("click", () => {
        handleDeleteCard();
    });
};
function handleDeleteCard() {
    if (elementoDeleteTarget) {
        elementoDeleteTarget.remove();
        almacenCards.pop();
        navigate(0);
        mostradorCantidad.textContent = almacenCards.length;
        closeDeleteDialog();
    };
};
function closeDeleteDialog() {
    const confirmDialog = document.getElementById("confirmDialog");
    confirmDialog.close();
    elementoDeleteTarget = null;
};

// Darling hold my hand //