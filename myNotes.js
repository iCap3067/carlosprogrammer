alert("Esto es una alerta desde un archivo externo");

//OTRO CODIGO


let nombreUsuario = "Carlos"
let edad = 18
console.log("Mi nombre es: " + nombreUsuario + " " + edad);

let numeroUno = 33
let numeroDos = 55
console.log(numeroUno + numeroDos);

prompt("Ingrese un numero, por favor");

//OTRO CODIGO


let nombreUsuario = "Carlos";
let edad = 18;
let nacionalidad= "Venezuelan";
let comprometido= false;

console.log("Su nombre es:");
console.log(nombreUsuario);
console.log("Su edad es:");
console.log(edad);
console.log("Su nacionalidad es:");
console.log(nacionalidad);
console.log("¿está comprometido?");
console.log(comprometido);

//OTRO CODIGO
// Esto es un comentario, o sea esto es codigo muerto
// El comentario no se ejecuta es una simple nota que nos sirve para darle entendimiento o una sinergia a nuestro codigo

console.log(parseInt(numeroUno));
console.log(parseInt(numeroDos));

let numeroUno = prompt("Ingrese primer numero.");
let numeroDos = prompt("Ingrese segundo numero.");

    
let resultado = parseInt(numeroUno) + parseInt(numeroDos);
console.log(resultado);

//OTRO CODIGO

let numeroUno = parseInt(prompt("Ingrese primer numero."));
let numeroDos = parseInt(prompt("Ingrese segundo numero."));


let resultado = numeroUno + numeroDos;
console.log(resultado);

//OTRO CODIGO

let resultado = 2 * (100 / 5) + 10;
console.log(resultado);

//OTRO CODIGO

let resultado = true || false || false;
console.log(resultado);
//OTRO CODIGO

let textJavascript = prompt("Escriba 'javascript'");

if (textJavascript === "javascript") {
    console.log("Lo escribiste super bien!");
} else {
    console.log("Lo escribiste mal");
}

// Otro codigo (ejemplo del if)

let stringUsuario = prompt("Escriba 'Javascript'");


if (stringUsuario === "Javascript") 
    {
    console.log("Lo escribiste excelente!");
}
else {
    console.log("Lo escribiste muy mal!");
} 

// Example

let stringUsuario = prompt("Escriba 'Javascript'");


if (stringUsuario === "Javascript") 
    {
    console.log("Lo escribiste excelente!");
}
else {
    console.log("Lo escribiste muy mal!");
} 


let numUsuario = parseInt(prompt("Ingrese un numero del 1 al 10"));

if (numUsuario <= 10){
    console.log("Perfecto!")
}
else {
    console.log("Mal, era del 1 al 10!");
}

//Fin del codigo, a continuacion ejemplo de "template string"

let opcionUsuario = prompt(`
    Elija una opción:
    1: Libros
    2: Películas
    3: Juegos
    `);

    console.log(opcionUsuario);

    let colorUsuario = prompt(`
        Seleccione un color:
        1: Blanco
        2: Naranja
        3: Verde
        4: Amarillo
        5: Negro
        `)

        console.log(colorUsuario);
        
        // Se podria definir como la capacidad para crear diversos strings sin expresar cada linea 
        // independientemente}

        // Ejemplos del uso de switch

        let opcionUsuario = prompt(`
            Elija una opción:
            1: Libros
            2: Películas
            3: Juegos
            `);
        
        console.log(opcionUsuario);


                switch(opcionUsuario){
                    case '1':
                        console.log("Principito");
                    break;
                    case '2':
                        console.log("Red Social");
                    break;
                    case '3':
                        console.log("Forza Horizon 5");
                    break;
                    default:
                        console.log("Opcion no valida!");
                    break;
                }
// respaldo plantilla de string de colores

let colorUsuario = prompt(`
    Seleccione un color:
    1: Blanco
    2: Naranja
    3: Verde
    4: Amarillo
    5: Negro
    `)

    console.log(colorUsuario);

    // Otro codigo
// ejemplo del uso del while

let numero = 1

while (numero <= 20) {
    console.log(numero)
    numero ++;   
}
console.log("Fin numero " + numero);

// Otro codigo =>
// Generador de numeros gracias al Math.floor(Math.random() * (10 - 1)) + 1;

let numeroMaquina = Math.floor(Math.random() * (10 - 1)) + 1;

console.log(numeroMaquina);

// Minijuego de adivinar el numero, sin resta
// de vidas porque el while destruye, MIEDO AL WHILE

let numeroMaquina = Math.floor(Math.random() * (10 - 1)) + 1;

console.log(numeroMaquina);

let vidas = 3


let numeroUsuario = parseInt(prompt("Intente adivinar el numero comprendido entre el 1 al 10"));


if (numeroMaquina === numeroUsuario){
   console.log("Has ganado!! :D")

} else {
   console.log("Has perdido, game over!")
}

// Uso del "for"
// Los arrays siempre empiezan desde el 0, es importante prestar
// muchisima atencion a la hora de hacer un for, es obligatorio
// hacerle su respectiva terminacion, o en palabras sencillas
//la instruccion que define el final del ciclo

let frutas = ["Platano", "Uva", "Patilla", "Pera", "Mango"
    , "Parchita", "Durazno"]
 
 for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
 }

 // Uso del "for of"

for (let fruta of frutas){
 console.log(fruta);
 }

 // OTRO CODIGO

 let nombreUsuario = "Carlos"

for (let letra of nombreUsuario){
   console.log(letra);
}

// NEXT CODE

function saludar (nombreUsuario){
    return ("Bienvenido! " + nombreUsuario)
 }
 
 console.log(saludar("Carlos"));

 //N e x t
 // Function de suma en Javascript:}

 function sumar(n1, n2) {
    return parseInt(n1) + parseInt(n2);
 }
 
 let numUno = prompt("Ingrese primer numero");
 let numDos = prompt("Ingrese segundo numero");
 
 console.log(sumar(numUno, numDos));

 // next code, you finally finish the first part of the course

 let nombreUsuario = "iCap3067"


console.log(`bienvenido: 
${nombreUsuario}`);

// podemos utilizar "${}" para solicitar o llamar alguna variable.

let nombreUsuario = "iCap3067"
let estado = false


console.log(`bienvenido: 
${nombreUsuario.toUpperCase()}`);

console.log(`
   
   ${(estado ? "En linea" : "Offline")}
   `);

   // next code

   // var nos permite crear diversas variables con el mismo
   // nombre, pero esto significa que esta dara por valor final
   // de la variable la ultima declaracion por ejemplo
   // var Usuario = "Luis";
   // var Usuario = "Carlos";  // tomando como verdadero valor
   // para la variable el string "Carlos"

var nombreUser = "iCap3067";
var nombreUser = "Carlos";

console.log(nombreUser);

// let no brinda la misma libertad

let nombreUser = "Charles"
let nombreUser = "Carlos" // <-- Esto nos arrojara error en la consola
// debido a que el uso del "let" no permite que existan diversas variables
// con el mismo nombre en el codigo.

let nombreUser = "Charles"
nombreUser = "Carlos" // <-- Por otro lado, la unica manera que podamos
// actualizar el valor de una variable que declaramos con "let"
// es que coloquemos el nombre de la variable y su respectivo "="
// despues de la igualdad expresamos el valor que quedara vigente
// en la variable

let estado = true  // <- tenemos el primer let de nuestro codigo


if(estado){
   console.log("Entro al if"); // <- Seguidamente tenemos una funcion
   let estado = false
   console.log(estado);
}
// El if es una caja aparte que tiene su propia logica, esto nos dice que el "let"
// que tenemos fuera del if no es el mismo que esta en el if que comienza
// despues de la declaracion del primer "let"

// En palabras mas sencillas el let presente en el if no tiene relacion con el anterior
// tecnicamente el if es un ecosistema aparte

console.log(estado);

// Habiamos comentado que no pueden existir dos variables
// con el mismo nombre, pero si nos fijamos en el codigo 
// en la parte superior podemos apreciar que esta correcto y tiene
// su respectiva logica

let estado = true

if(estado){
   console.log("Entro al if");
   let estado = false
   console.log(estado);
}

console.log(estado);

// Otro codigo

for (const i = 0; i < 5; i++){
    console.log(i)
 }

 // Por excelencia siempre se debe de utilizar el for
 // con su respectivo "let" para la declaracion de variables
 // debido a que como se puede observar en el ejemplo
 // en la parte superior, no va a funcionar porque
 // const es una variable que no puede cambiar su valor
 // una vez ya declarada, y lo que intentamos hacer es aplicar i++
 // que es un incrementador, entonces necesitamos que la variable 
 // pueda entrar en un cambio constante mientras se ejecuta el codigo
 // AHORA YA SABEMOS PORQUE SOLO USAMOS "LET" PARA DECLARAR VARIABLES EN
 // UNA CAJA INDEPENDIENTE, como lo es el "for"

 const frutas = [];
frutas[0] = "sandia";
frutas[1] = "piña";
frutas[2] = "mango";
frutas[3] = "durazno";

console.log(frutas);

// Podemos utilizar CONST para declarar una variable
// unica por asi decirlo, pero eso no significa que podamos cambiar
// su contenido, de esta manera podemos crear un ARRAY
// utilizando const y posteriormente definiendo para valor en el indice
// con un string determinado.

const miArray = []
miArray = ["nuevoElemento"]

// Tenemos otros ejemplos de esta misma asignacion de valores a una variable
// CONST

const miArray = []
miArray[0] = ["nuevoElemento"]
console.log(miArray)

// N E X T code.

// metodo PUSH para los Arrays, o Arrays tipo PUSH.
// este mismo agrega el valor declarado al final de la cadena
// de strings concatenados

const frutas = ["sandia", "pera"];

frutas.push("banana");

console.log(frutas);

// .unshift nos sirve para agregar nuestro elemento a la lista de strings concatenados al inicio
// a diferencia de lo que hace el push, que opera agregando nuestro valor al final de la cadena de strings
// concatenados

const frutas = ["sandia", "pera"];

frutas.unshift("banana");

console.log(frutas);

// next code

// POP nos sirve para eliminar el ultimo elemento de la cadena
// de strings concatenados

const frutas = ["sandia", "pera"];

const frutaEliminada = frutas.pop();

// tambien podemos declarar que el elemento eliminado
// se almacene en una variable para posterior poder solicitarla
// en nuestra consola, esto puede ser util a la hora de crear sistemas
// donde el usuario pueda almacenar y eliminar datos.
// Donde puede ser util almacenar en una variable la accion de .pop para asi
// poder expresarle al usuario que fue lo que elimino.

console.log(frutas);
console.log(frutaEliminada);

// NEXT CODE
// tenemos SHIFT para eliminar el primer string concatenado en nuestro array
// se podria decir que es un efecto inverso al que hace el .pop
// entiendase en el siguiente codigo

const frutas = ["sandia", "pera"];

const frutaEliminada = frutas.shift();

console.log(frutas);
console.log(frutaEliminada);

// NEXT CODE
// Seguidamente vamos a realizar una pequeña aplicacion de
// "Carrito de compras"

const frutas = []
const fruta = prompt("Ingresar elemento que desea agregar al carrito");

frutas.push(fruta);

while(confirm("¿Deseas agregar otro elemento?")){
    const fruta = prompt("¿que fruta desea comprar?");
    frutas.push(fruta);

}

console.log("Compraste:");
for (const fruta of frutas) {
    console.log(fruta);
}

// Next code
// Funcion declarativa

function numeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min)) + min
}

console.log(numeroAleatorio(10,21));

// Funcion expresada o anonimas, se utiliza una sola vez
// y en teoria no la puedes solicitar o llamar por su nombre por que no cuenta con alguno
// no necesitamos nombrarlas porque no las vamos a utilizar en otro lugar
// simplemente las declaramos, utilizamos y ya 

const numAzar = function(min, max){
    return Math.floor(Math.random() * (max - min)) + min
}

console.log(numAzar(10,200));

console.log(numeroAleatorio(1, 5));

// next code
// Tenemos las arrow functions que nos sirven para ser mas eficientes a la hora de codear, ahorrandonos lineas de codigo

const numAzar = function(min, max){
    return Math.floor(Math.random() * (max - min)) + min
}

    console.log(numAzar(100,200));

    ==========================

    const azarFlecha = (min, max) => (Math.floor(Math.random() * (max - min)) + min);

    console.log(azarFlecha(1, 11)); 
    
    // la arrow "=>" entiende que lo que le sigue va a retornar, ahorrandonos
    // la function misma y a su vez no hace falta que declaremos return

    const funcionArrow = (min, max) => (Math.floor(Math.random() * (max - min)) + min);
    console.log(99, 101);

    // las arrow function nos brindan alternativas a la hora de crear funciones

    // next code

    const funcionArrow = (min = 1, max = 100) => 
        (Math.floor(Math.random() * (max - min)) + min);

    console.log(funcionArrow(null, 50));
    
    // Podemos utilizar la palabra null o undefined para omitir la apropiacion de un dato en un campo no deseado,
    // tal y como aparece en el ejemplo que utilizamos null para omitir que nuestro 50 sea el minimo ya que deseamos
    // que sea el limite maximo hasta donde puede llegar nuestro aleatorizador


    //next code

    frutas.forEach(fruta => console.log(fruta));

    // El .forEach junto a las arrow functions nos ayudan a agilizar nuestro codigo
    // En el ejemplo se plantea otra solucion para
    // nuestro previo minijuego de carrito de compras donde recortamos muchisimo codigo
    // utilizando arrow function y el forEach

    // el metodo forEach ejecuta la funcion indicada una vez por cada elemento del array

    let frutas = ["manzana", "sandía", "pera"]
frutas.forEach((fruta, index) => {
    console.log(index)
    console.log(fruta)
})
// con el forEach podemos pintar fruta y el respectivo index correspondiente a cada fruta
// Como podemos apreciar el forEach nos brinda muchisimas posibilidades

const carrito = []
const fruta = prompt('🍒 Feria Market 🍉 ¿qué fruta desea comprar?')

carrito.push(fruta)

while (confirm('¿Desea agregar otro elemento al 🛒?')) {
    const fruta = prompt('¿qué fruta desea comprar?')
    carrito.push(fruta)
}

console.log('Usted compró: ')
carrito.forEach((fruta, index) => (
    console.log(`${index + 1}: ${fruta}`)
))

// Esta interpolarizacion nos ayuda a darle una mejor visual al usuario, declarando la impresion del index
// junto al elemento correspondiente en nuestro array, como truco para mejor entendimiento le agregamos el "+ 1"
// despues del index para que asi parezca que comienza desde el 1 cuando en realidad todos los arrays empiezan
// desde el 0

// O B J E T O S
// Objeto literal

const gato= {
    nombre: "Valiente",
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"];
};
console.log(gato)

// another example para objetos literales

const gato = {
    nombre: "Valiente",
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"]
};

console.log(gato["nombre"])

// podemos solicitar un dato especifico de un objeto con el gato.nombre en el caso del codigo previo

const gato = {
    nombre: "Valiente",
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"]
};

const perro = {
    nombre: "Suinghi",
    duerme: false,
    edad: 7,
    enemigos: ["gallinas", "gatos"]
};
console.log(gato.nombre);
console.log(perro.nombre);

// ejemplos de objetos

if(gato.hasOwnProperty("edad")){
    gato.nombre = "flojera";
}

if(gato.hasOwnProperty("edad")){
    gato.nombre = "flojera";
}
console.log(gato);

// podemos utilizar hasOwnProperty para consultar si un objeto
// ya cuenta con una caracteristica

console.log(amigos.length)

// las propiedades no llevan parentesis, pero los metodos si, o method

// Anidados para nuestro objeto

otros: {
    amigos: ["cobarde", "timido"],
    favoritos: {
        comida: {
            frio: "salmon",
            caliente: "pollo"
        }
    }
}

// Los objetos son ampliamente modificables, pueden contener funciones
// y a su vez estas podemos codear estas funciones utilizando las tecnicas de
// eficiencia que hemos aprendido

const gato = {
    nombre: "Valiente",
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"],
    comer: function(){
        console.log("gato comiendo");
    },
    comerDos(){
        console.log("gato comiendo dos veces");
    },
};

gato.comer();
gato.comerDos();

// next code, podemos interpolar dentro de un objeto y posterior encontrar datos con su respectiva direccion
// en el caso de nuestro codigo insertamos el nombre del gato con gato.nombre <=.

const nombre = "icap";

const gato = {
    nombre: "Valiente",
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"],
    comer(alimento) {
        console.log(`
            ${gato.nombre} esta comiendo ${alimento}
        `);
    },
};

gato.comer("galletas")

// Codigo importante para apreciar acciones

const gato = {
    nombre: "Valiente",
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"],
};

for(let propiedad in gato){
    console.log(gato[propiedad]);
}

// el for in es util para verificar los valores presentes en un objeto o base de datos
// es de importancia expresar en el console.log el nombre de la variable
// let entre corchetes []

console.log(Object.values(gato))

Object.values(gato).forEach((item) => console.log(item));

// Podemos usar Object.values para revisar los elementos de un objeto
// el Object se puede utilizar de estas dos maneras con la finalidad de que sea
// mas entendible y verificable a la hora de expresarlo en la consola.

// Tenemos object.values - object.entries - object.key entre otros que entenderemos progresivamente

var obj = { foo: "bar", baz: 42};
console.log(Object.entries(obj));

// Uso del Object.entries


// Uso del Object.keys

const object1 = {
    a: "something",
    b: 42,
    c: false,
};
console.log(Object.keys(object1));

// En resumen, el Object.values() nos expresa las claves de la propiedad como sus valores
// Con claves podemos referirnos como al indice o el orden en el que estan integrados
// los elementos que queremos mostrar

const gato = {
    nombre: "Valiente",
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"],
    otros: {
        amigos: ["Cobarde", "Timido", "Pegajoso"],
        favoritos: {
            comida: {
                fria: "salmon",
                caliente: "pollo",
            }
        }
    }
}

const nombreGato = gato.nombre;
console.log(nombreGato);

// Aca estamos desempacando datos del objeto "gato" para crear variables con esos
// contenidos que desempacamos.

const { nombre, duerme, edad} = gato;
console.log(nombre, duerme, edad);

// la desestructuracion nos permite desempacar valores de arreglos
// o propiedades de objetos en distintas variables
// en resumen estamos desempacando valores de un objeto en
// variables independientes.

//next code

let nombreUsuario = "bluuWEB";
console.log(`Bienvenido: ${nombreUsuario.toUpperCase()}`)

/// con el .toUpperCase() o remplazando el Lower por Upper podemos definir que el string que llamamos en nuestra interpolacion
// se va a graficar en la consola con todos sus caracteres en mayuscula o minuscula

const nombre = "Carlos Barrancas";

const gato = {
    nombre: "Valiente",
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"],
    otros: {
        amigos: ["Cobarde", "Timido", "Pegajoso"],
        favoritos: {
            comida: {
                fria: "salmon",
                caliente: "pollo",
            }
        }
    }
}

const nombreGato = gato.nombre;
const { nombre : nombreSuperGato = "sin nombre", duerme: duermeGato, edad} = gato;
console.log(nombreSuperGato, duermeGato, edad);

// NEXT CODE

let playerName = "ItsMaxiGamer07";
let online = true

console.log(`
    ${online ? "Bienvenido!" : "Adios!"} ${playerName}
    `);

// Ejemplo de interpolacion

const {otros:{amigos: friendshipsGato},
} = gato;
console.log(friendshipsGato);

// Ejemplo de una desestructuracion dentro de otra y el alias de la variable amigos

const {amigos: amigosArray} = gato.otros;
const [aUno, aDos, aTres, aCuatro = "It doesn't exist"] = amigosArray;

console.log(aCuatro);

// Desestructuracion de un array, ademas de utilizar dicha desestructuracion para surtir otra
// serie de variables

const nombre = "Carlos Barrancas";

const gato = {
    nombre: "Valiente",
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"],
    comer(comida) {
        return `${gato.nombre} esta comiendo ${comida}`;
    },
};

const comer = gato.comer;
console.log(comer("pescado"))



console.log(nombre.toUpperCase);

// Tengo que interpretar el codigo, no caer en copiar en cortar, interpretar y entender lo que estamos
// copiando

let Carlos = "Azul";
Carlos = "Blanco";
console.log(Carlos);


// Ejemplos de usos del Array y de los object.values() y sus variantes

const elArray = ["Lil", "Sam", "Tom"];

const cantidadElementos = elArray.length;
console.log(cantidadElementos);

// console.log(cantidadElementos);

elArray.push("Carlos");
elArray.unshift("Dwayne");
elArray.push("Kei");

console.log(elArray)

// COMMENT

Object.values(gato).forEach((item) => console.log(item));

// COMMENT

const gato = {
    nombre: "Valiente",
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"],
    otros: {
        amigos: ["Cobarde", "Timido", "Pegajoso"],
        favoritos: {
            comida: {
                fria: "salmon",
                caliente: "pollo",
            }
        }
    }
}

const {nombre, duerme, enemigos, otros} = gato



const perro = {
    nombre: "Suinghi",
    accion: "wo wo wo",
    ladrar: function(){
        console.log(this.accion)
    }
    
};
perro.accion = "ladrido irrelevante*";

perro.ladrar()





//console.log(otros)




const gato = {
    nombre: "Valiente",
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"],
    otros: {
        amigos: ["Cobarde", "Tímido", "Pegajoso"],
        favoritos: {
            comida: {
                fria: "salmón",
                caliente: "pollo",
            },
        },
    },
};


//console.log(gato);







const carlosDev1 = {
nombre: "Caros",
trabajando: true,
edad: 18,
comidasFavoritas: ["Burgers","Tacos", "Pizza"],
}

carlosDev1.nombre = "Carlos Luis Barrancas Perez";
carlosDev1.deporteFavorito = ["Futbol", "Ciclismo", "Natacion"];

const jonDev2 = {
nombre: "Joneikel *** **** ****",
trabajando: false,
edad: 26,
comidasFavoritas: ["Hot-dogs", "Shawarmas", "Ensalada"],
}

const {nombre: nombreDev1, trabajando: trabajandoDev1, edad: edadDev1, comidasFavoritas: comidasFavoritasDev1} = carlosDev1;

const {nombre: nombreDev2, trabajando: trabajandoDev2,  edad: edadDev2, comidasFavoritas: comidasFavoritasDev2} = jonDev2;

const reporteDev = "El dato que has solicitado es el siguiente: ";

//console.log(reporteDev + comidasFavoritasDev1);

//console.log(carlosDev1);

function saludar(amigazo) {
    console.log("Bienvenido: " + (amigazo));
}

saludar("Samuel");

function sumar(n1, n2) {
    return n1 + n2;
}


// El Query selector nos permite interactuar con nuestro DOM

console.log(document.querySelector("h1"));
console.log(document.querySelector(".text-primary"));
console.log(document.querySelector("#tituloWeb"));

// En este caso pintamos en consola llamando al h1 por su id o su clase.

<body>
    <h1 id="tituloWeb" class="text-primary">T e s t i n g</h1>

<div class="container">
    <p class="text-danger">This container contain a long text made by a computer here in the enterprise #1!!!</p>
    <p class="text-danger">This container contain a long text made by a computer here in the enterprise</p>
    <p class="text-danger">This container contain a long text made by a computer here in the enterprise</p>
</div>

<p class="text-danger">Esta fuera del container</p>

    <h2>I'll use this page to test my code using another
        file. I'm coding Javascript in an external file.
    </h2>
    <p>This is an example to show a little paragraph</p>

        <script src="/app.js"></script>
</body>

// En este caso nuestro querySelector coincidio con el primer elemento cargado con esa clase, omitiendo la presentacion
// de todos los demas.

console.log(document.querySelectorAll(".container .text-danger"))

// Next code

const h1 = document.querySelector("#tituloWeb");

console.log(h1.className);
console.log(h1.id);
console.log(h1.style);
console.log(h1.tagName);
console.log(h1.textContent);

h1.textContent = "nuevo texto";
h1.style.backgroundColor = "red";
h1.style.color = "white";


// NEXT CODE


console.log("Aca comienza el codigo");

const gato = {
    nombre: "Valiente",
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"],
    comer (comida) {
        return `${gato.nombre} esta comiendo ${comida}`;
    },
    set nuevoEnemigo(nuevo) {
        return gato.enemigos.push(nuevo);
    },
    get nombreMayuscula() {
        return this.nombre.toUpperCase();
    },
};

gato.nombre= "Simon";

gato.nuevoEnemigo = "Robinson";
gato.nuevoEnemigo = "Ula";
console.log(gato.enemigos);

console.log(gato.nombreMayuscula);

const comer = gato.comer;
console.log(comer("galletas"));

// Pequeño test

// Nota: el getter no puede contener parametros mientras que al trabajar con el setter siempre debe contener exactamente
// un solo parametro

let a = ["hola"];
let b = a;

a.push("adios");

console.log(b);

// Cuando asignamos valores primitivos javascript se encarga de crear una copia del valor que asignado
// esto se caracteriza como "por valor" mas en cambio si utilizamos valores no primitivos Javascript en vez de crear
// una copia del valor en ese instante se encarga de copiar "la referencia", referencia que utilizamos para acceder
// al valor original. 

const a = {
    nombre: "hola",
};

const b = a;

a.nombre = "chao";

console.log(b);

// Aqui podemos apreciar que javascript sigue la regla de los valores no primitivos para los objetos



// Practica js

const iva = 21;
function calculo(precio){
    return precio + iva * 200/100;
};

let precio = 200;

console.log(calculo(precio));



let lado= 40;

perimetro = lado + lado + lado + lado;

area = lado * lado;

console.log(area);



let nombre = prompt("Por favor ingresa tu nombre");
let saludar = "Hola, bienvenido " + nombre;
console.log(saludar);


let var1 = parseInt(prompt("Por favor ingrese el primer numero"));
let var2 = parseInt(prompt ("Por favor ingrese el segundo numero"));
let var3 = parseInt(prompt ("Por favor ingrese el tercer numero"));

let sumaNumeros = (var1 + var2 + var3);
let mediaNumeros = sumaNumeros / 3;

console.log(mediaNumeros);


let litrosConsumidos = parseInt(prompt("Ingrese los litros consumidos"));
let distanciaRecorrida = parseInt(prompt("Ingrese la distancia recorrida"));
let litrosKm = litrosConsumidos / distanciaRecorrida;

let combustiblePorKm = "Usted ha consumido: " + litrosKm;

console.log(combustiblePorKm);

// Mas codigos

var num= 45;
var unidades, decenas;
unidades = num%10;
decenas = parseInt(num/10);
console.log(decenas+" decenas y ");
console.log(unidades+" unidades");



var clientes, papas, huevos, cebollas;

//clientes = parseInt(prompt("Ingrese el numero de clientes"));

papas = clientes*200;
papas = papas/1000;  // Transformacion a kilos
huevos = papas *5;
cebollas = papas *300;

console.log("Papas: " + papas + " kilos");
console.log("Huevos: " +huevos);
console.log("Cebollas: " + cebollas + " gramos");

// Siguiente exercise

var varUno = 10;
var varDos = 30;

var aux = varUno;

varUno = varDos;

varDos = aux;

console.log(varUno)

// Next code


                
var num = parseInt(prompt("Entrar numero entero"));
var res = num%2;
var par = res==0;
console.log("¿Es par? " + par);

// Next code

const h1 = document.querySelector("#tituloWeb");

h1.textContent = "Escrito desde js."
h1.style.backgroundColor = "yellow";
h1.style.color = "gray";



const boton = document.querySelector (".btn-primary");

boton.addEventListener("click", () => {
    console.log("me diste click");
    h1.textContent = "text from js, say hello!"
    h1.style.color ="purple";
    h1.style.backgroundColor="black";
})


// Interacciones con eventos y el "click"

const inputColor = document.querySelector("#inputColor");
const btnVisualizar = document.querySelector("#btnVisualizar");
const parrafoExa = document.querySelector("#parrafoExa");
const cardColor = document.querySelector("#cardColor");

 btnVisualizar.addEventListener("click", () =>{

    console.log(inputColor.value);
    parrafoExa.textContent = inputColor.value;
    cardColor.style.backgroundColor = inputColor.value;
 })

 // La superior es la parte javascript que hace la magia en el DOM, debajo voy a copiar el index inicial que he utilizado para esta practica

//  <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Seleccionar color</title>
//     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

// </head>
// <body>

// <div class="container mt-3 text-center">
//     <label for="inputColor" class="form-label">Color picker</label>
//     <input type="color" class="form-control form-control-color w-100" 
// id="inputColor" value="#563d7c" title="Choose your color">

//     <div class="mt-3">
//         <button class="btn btn-primary w-100" id="btnVisualizar">Visualizar</button>
//         <p id="parrafoExa" class="lead mt-3">#563d7c</p>

//         <div id="cardColor" class="card p-5" style="background-color: #563d7c;">

//         </div>
//     </div>
// </div>



// <script src="/app.js"></script>
// </body>
// </html>

// Alli esta el index HTML para cuando desee visualizar la pagina intectactiva que he creado.

S I G U I E N T E

// Next code

const h1 = document.querySelector("#tituloWeb");
const boton = document.querySelector("#btn1");


h1.style.backgroundColor = "violet"
h1.style.color = "white"

boton.style.backgroundColor = "violet"
boton.style.color = "white";

boton.addEventListener ("click", () => {
    console.log("Ey tu, me diste click!");

    h1.textContent = "Presionaste el boton, muy bien!";
    h1.style.backgroundColor = "yellow";
    h1.style.color = "green";
    boton.style.backgroundColor = "green";
    boton.style.color = "yellow";
});

console.log(boton.textContent);

// Cabe destacar que para aplicar este codigo debes de crear en este caso
// un h1 con el mismo ID al igual que un mismo button con el mismo ID del ejemplo, recuerda.


const h1 = document.querySelector("#tituloWeb");
const boton = document.querySelector("#btn1");
const cardColor = document.querySelector("#cardColor");
const elBody = document.querySelector("#elBody");

h1.style.backgroundColor = "violet"
h1.style.color = "white"
cardColor.style.backgroundColor = "violet";
cardColor.style.color = "white";
boton.style.backgroundColor = "violet"
boton.style.color = "white";


boton.addEventListener ("click", () => {
    console.log("Ey tu, me diste click!");

    h1.textContent = "Presionaste el boton, muy bien!";
    h1.style.backgroundColor = "yellow";
    h1.style.color = "green";
    boton.style.backgroundColor = "green";
    boton.style.color = "yellow";
    cardColor.style.backgroundColor = "green";
    cardColor.style.color = "yellow";
    elBody.style.backgroundColor = "darkgreen";

});

console.log(boton.textContent);

// A continuacion el respectivo HTML del codigo que esta en la parte superior

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <style>
//         body {
//             background: rgb(255, 115, 255);
//         }
//     </style>
// </head>
// <body id="elBody">
//     <h1 id="tituloWeb" class="text-primary">Buenas noches a todos, enjoy your moment coding.</h1>
// <div class="mt-3">
//     <button id="btn1">Push the button</button>
//     <p>Esta es una prueba de como podemos modificar el document mediante la modificacion del DOM</p>

//     <div id="cardColor" class="card p-5" style="background-color:rgb(10, 1, 3)">
//         You know this is a div, i'm changing its backgroundcolor using js
//     </div>
// </div>    

//     <script src="/javascriptProgreso/testAlca.js"></script>
// </body>
// </html>


// SIGUIENTE CODIGO

const listaDinamica = document.querySelector("#listaDinamica");

const arrayPaises = ["Peru", "Venezuela", "Estados Unidos"];

const fragment = document.createDocumentFragment();

arrayPaises.forEach((pais) => {
    const newNode = document.createElement("li");
    newNode.textContent = (pais);

    const referenceNode = fragment.firstChild;

    fragment.insertBefore(newNode, referenceNode);

})

listaDinamica.appendChild(fragment);

// arrayPaises.forEach((pais) =>{
//     const li = document.createElement("li");
//     li.textContent = (pais);
//     listaDinamica.appendChild(li);
// });

// AQUI PODEMOS APRECIAR EL USO DEL "FRAGMENT", al igua que el appendchild y el firstChild
// A su vez podemos apreciar el insertBefore que nos sirve para invertir el orden de un array digamos, requiriendo este previamente mencionado 
// La asignacion de dos valores, el newNode (el nodo que vamos a insertar) y el referenceNode 
// (el primer nodo en la lista para asimismo tomarlo de referencia para asi omitirlo)


const listaDinamica = document.querySelector("#listaDinamica");

const arrayPaises = ["Canada", "Peru", "Venezuela", "Estados Unidos"];

const fragment = document.createDocumentFragment();

arrayPaises.forEach((pais) => {

    const li = document.createElement("li");
    li.className = "list";
    
    const b = document.createElement("b");
    b.textContent = "Pais: "

    const span = document.createElement("span");
    span.className = "text-primary";
    span.textContent = pais;

    li.appendChild(b);
    li.appendChild(span);

    fragment.appendChild(li);
});

listaDinamica.appendChild(fragment);


// EXAMPLE

arrayPaises.forEach((pais) => {
    listaDinamica.innerHTML += `
    <li class="list">
        <b>Pais: </b>
        <span class="text-primary">${pais}</span>
    </li>
    `
})

// FINALMENTE ESTA ES LA VERSION CASI MAS EFICIENTE PARA REALIZAR LA TAREA QUE DESEAMOS
// La finalidad de apreciar diversas soluciones nos ayuda a desarrollar nuestra logica a la hora de codear en el futuro

// He comprendido la manera casi eficiente totalmente, a su vez evitando el reflow

const listaDinamica = document.querySelector("#listaDinamica");
const arrayPaises = ["Canada", "Peru", "Venezuela", "Estados Unidos"];
const fragment = document.createDocumentFragment();
let template = "";
arrayPaises.forEach((pais) => {
    template += `
    <li class="list">
        <b>Pais: </b>
        <span class="text-primary">${pais}</span>
    </li>
    `
})
listaDinamica.innerHTML = template;


// Next code

const carrito = document.getElementById("carrito")
const template = document.getElementById("template")
const fragment = document.createDocumentFragment()
const btnesBotones = document.querySelectorAll(".card .btn")


const carritoObjeto = {}

const agregarAlCarrito = (e) => {
    console.log(e.target.dataset.fruta)
}

btnesBotones.forEach((btn) => btn.addEventListener("click", agregarAlCarrito));

// Html code

{/* <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <title>Practiva v1</title>
    <!-- <style>
        body {
            background: rgb(255, 115, 255);
        }
    </style> -->
</head>

<body>

    <main class="container mt-3">

        <div class="row text-center">

            <article class="col-sm-4 mb-3">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Frutillas</h5>
                        <button class="btn btn-outline-primary"
                        data-fruta="Frutilla"
                        >Agregar</button>
                    </div>
                </div>
            </article>

            <article class="col-sm-4 mb-3">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Banana</h5>
                        <button class="btn btn-outline-primary"
                        data-fruta="Banana"
                        >Agregar</button>
                    </div>
                </div>
            </article>

            <article class="col-sm-4 mb-3">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Manzana</h5>
                        <button class="btn btn-outline-primary"
                        data-fruta="Manzana"
                        >Agregar</button>
                    </div>
                </div>
            </article>
        </div>

    </main>

    <section class="container mt-3">
        <ul class="list-group" id="carrito"></ul>
    </section>

    <template id="template">
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span class="lead">Frutilla</span>
            <span class="badbe bg-primary rounded-pill">12</span>
        </li>
    </template> */}


    



//     <script src="/javascriptProgreso/testAlca.js"></script>
// </body>


// Next code

// Un paradigma de programación no es más que una forma de ver y crear código de programación. Para resolver problemas.



const frutas = ["B", "M", "F"];

const nuevoArray = frutas.map((item) => item);
frutas.push("S");
console.log(nuevoArray);

// Array methods no mutan el array original sino que nos devuelve un array nuevo, graficado en el codigo anterior.
// los Array Methods nos crean un nuevo espacio de memoria, no transforma ni cambia absolutamente nada en nuestro array original
// En este caso hemos utilizado el map

const usuarios = [
    { uid: 1, name: "John", age: 34 },
    { uid: 2, name: "Amy", age: 20 },
    { uid: 3, name: "camperCat", age: 10 },
];

const existe = usuarios.findIndex((usuario) => usuario.uid === 3);
console.log(existe);

// Ejemplo del findIndex, los demas ejemplos los agregare en breve.


<div class="container">
        <div class="border border-primary border-5 py-5 m-3">
            Lorem, ipsum dolor
            <div class="border border-secundary border-5 py-5 m-3">
                Lorem, ipsum dolor
                <div class="border border-danger border-5 py-5 m-3">
                    Lorem, ipsum dolor
                </div>
            </div>
        </div>
    </div>

const padre = document.querySelector(".border-primary");
const hijo = document.querySelector(".border-secundary");
const nieto = document.querySelector(".border-danger");

padre.addEventListener("click", () => {
    console.log("me diste click padre");
})

hijo.addEventListener("click", () => {
    console.log("me diste click hijo");
})

nieto.addEventListener("click", () => {
    console.log("me diste click nieto");
})

// Ejemplo de la propagacion y como evitarla
// Al igual que realizaremos este mismo ejercicio pero utilizando el .forEach

const cajitas = document.querySelectorAll(".border");

cajitas.forEach((caja) => {
    caja.addEventListener("click", (e) => {
        e.stopPropagation();
        console.log("me diste click ahora");
    });

});

// Mas optimo y a su vez evitamos la propagacion con ayuda del e.stopPropagation();

// Si es un evento submit, sobre un formulario ¿Cuál sería el comportamiento por defecto del formulario al hacer submit? pues se enviaría. 
// Entonces preventDefault() detendrá el envío del formulario.
//Si es un evento click sobre un enlace ¿Cuál sería el comportamiento predeterminado de un enlace al hacer clic? pues 
// se navegará a la dirección del href del enlace. Entonces preventDefault() 
// detendría esa navegación.


const formulario = document.querySelector("form");
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("click");
});


// SOLAMENTE GUARDARE ESTO AQUI                               =>

/*   const carrito = document.getElementById("carrito")
  const template = document.getElementById("template")
  const fragment = document.createDocumentFragment()
  const botones = document.querySelector(".card .btn btn-outline-primary")


  const carritoObjeto =[];

  const agregarAlCarrito = (e) => {
      console.log(e.target.dataset.fruta)

      const producto = {
          titulo: e.target.dataset.fruta,
          id: e.target.dataset.fruta,
          cantidad: 1,
      };

      const indice = carritoObjeto.findIndex((item) => item.id === producto.id);
      console.log(indice);

      if (indice === -1) {
          carritoObjeto.push(producto);
      } else {
          carritoObjeto[indice].cantidad ++
      }

      console.log(carritoObjeto);
      pintarCarrito(carritoObjeto);
     
     }
    
     
     botones.forEach((btn) => btn.addEventListener("click", agregarAlCarrito));

     const pintarCarrito = (array) => {
         carrito.textContent = "";
        
         Object.values(carritoObjeto).forEach((item) => {
             const clone = template.content.cloneNode(true);
             clone.querySelector(".lead").textContent = item.titulo;
             clone.querySelector(".rounded-pill").textContent = item.cantidad;
            
             fragment.appendChild(clone);
         });
        
         carrito.appendChild(fragment);
     } */
    
 
 
//   const cajitas = document.querySelectorAll(".border");
 
//   cajitas.forEach((caja) => {
//       caja.addEventListener("click", (e) => {
//           e.stopPropagation();
//           console.log("me diste click ahora");
//       })
 
//   });


// NEXT CODE

const carrito = document.getElementById("carrito");
const template = document.getElementById("template");
const footer = document.getElementById("footer");
const templateFooter = document.getElementById("templateFooter");
const fragment = document.createDocumentFragment();

let carritoArray = [];

// Delegacion de eventos:

document.addEventListener("click", (e) => {
    if (e.target.matches(".card button")) {
        // console.log(e.target.matches(".card .btn btn-outline-primary"));
        agregarAlCarrito(e);
    };

    if (e.target.matches(".list-group-item .btn-success")) {
        btnAumentar(e);
    }

    if (e.target.matches(".list-group-item .btn-danger")) {
        btnDisminuir(e);
    }
});


const agregarAlCarrito = (e) => {

    // console.log(e.target.dataset.fruta);

    const producto = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1,
        precio: parseInt(e.target.dataset.precio),
    };

    const indice = carritoArray.findIndex((item) => item.id === producto.id);

    if(indice === -1) {
        carritoArray.push(producto);
    } else {
        carritoArray[indice].cantidad++;
        // carritoArray[indice].precio = carritoArray[indice].cantidad * producto.precio;
    }

    console.log(carritoArray);

    pintarCarrito();
 };

    const pintarCarrito = () => {
     carrito.textContent = "";

     carritoArray.forEach((item) => {
        const clone = template.content.cloneNode(true);
        clone.querySelector(".text-white .lead").textContent = item.titulo;
        clone.querySelector(".badge").textContent = item.cantidad;
        clone.querySelector("div .lead span").textContent =
        item.precio * item.cantidad;

        clone.querySelector(".btn-success").dataset.id = item.id;
        clone.querySelector(".btn-danger").dataset.id = item.id; 



        fragment.appendChild(clone);
     });

     carrito.appendChild(fragment);
     pintarFooter();
 };

 const pintarFooter = () => {

    footer.textContent = "";

    const total = carritoArray.reduce(
        (acc, current) => acc + current.cantidad * current.precio,
        0
    );
    
    const clone = templateFooter.content.cloneNode(true);
    clone.querySelector(".lead span").textContent = total;

    footer.appendChild(clone);
 }


const btnAumentar = (e) => {
    // console.log("Me diste click", e.target.dataset.id);

    carritoArray = carritoArray.map((item) => {

        if(item.id === e.target.dataset.id) {
        item.cantidad++
        };
        return item;
    });

    pintarCarrito();
};

    const btnDisminuir = (e) => {
        carritoArray = carritoArray.filter((item) => {
    
            if (item.id === e.target.dataset.id) {
                if (item.cantidad > 0) {
                    item.cantidad--;
                    if (item.cantidad === 0) {
                        return
                    }
                    return item;
                }
            
        } else {
            return item;
        }
    
    });
        pintarCarrito();
    };

    // Es importante analizar e interpretar el codigo que esta en la parte superior

    // Expresiones regulares

    // utilizamos el siguiente procedimiento = /patron/flag

//     [0-9] Un dígito del 0 al 9.
// [A-Z] Letra mayúscula de la A a la Z. Excluye ñ o letras acentuadas.
// [a-z] Letra minúscula de la a a la z. Excluye ñ o letras acentuadas.
// [A-Za-z0-9] Carácter alfanumérico (letra mayúscula, minúscula o dígito).


// Primero este analisis:

 const regExpLiteral = /[ue]/gi;
 console.log(regExpLiteral.test("blaEb"));

// Validacion de formularios

// Manipulacion de arrays:

const colores = "green, gray, purple, black, orange";

const array = colores.split(",");

console.log();

/* const numeros1 = "Uno,Dos,Tres,Cuatro,Cinco";

const array = numeros1.split(",");

console.log(array); */

// Queda pendiente el dominio y conocimiento de la utilizacion del metodo at()

// Se puede validar un formulario con solamente el uso de HTML, sin embargo me enfocare en la validacion mediante js




const formulario = document.getElementById("formulario");

const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");

const alertName = document.getElementById("alertName");
const alertEmail = document.getElementById("alertEmail");
const alertSuccess = document.getElementById("alertSuccess");

// Simple referencia para acceder a nuestras expresiones regulares mas facil

const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

// Esta es nuestra funcion para representar nuestro mensaje de exito

const pintarMensajeExito = () => {
    console.log(userName.value);
    alertSuccess.classList.remove("d-none")
    alertSuccess.textContent = "Formulario enviado!"

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

formulario.addEventListener("submit", (e) => {

    // console.log("Formulario enviado!")

    // con el preventDefault() nos encargamos de cancelar cada evento
    // predeterminado al que este sujeto el SUBMIT

    e.preventDefault();

    alertSuccess.classList.add("d-none");

    const errores = [];

    // Validacion del userName

    if (!regUserName.test(userName.value) || !userName.value.trim()) {
        
        userName.classList.add("is-invalid")
        
        errores.push({
            tipo: alertName,
            msg: "Formato no valido en el campo nombre, solo letras",
        });

    } else {
        userName.classList.remove("is-invalid");
        userName.classList.add("is-valid");
        alertName.classList.add("d-none");
    }

    // Validacion del correo, userEmail

    if (!regUserEmail.test(userEmail.value) || !userEmail.value.trim()) {
    
    userEmail.classList.add("is-invalid")

    errores.push({
        tipo: alertEmail,
        msg: "Por favor ingrese un correo valido",
    });
    } else {
        userEmail.classList.remove("is-invalid");
        userEmail.classList.add("is-valid");
        alertEmail.classList.add("d-none");
    }

    if (errores.length !== 0) {
        pintarMensajeError(errores);
        return;
    }

    console.log("Formlario enviado con exito!")
    pintarMensajeExito();

});

// You have to finish this until you receive the alert to send the page, i really trust on you, Carlos
// you are the best programmer!

// https://github.com/iCap3067/carlosdev.git












