// Ejercicio 
// Crea un nuevo archivo JS que contenga una lista con los siguientes elementos:
// - Tu nombre (string)
// - Tu edad (number)
// - ¿Eres desarrollador? (boolean)
// - Tu fecha de nacimiento (Date)
// - Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)

//**********solucion************

const mi_informacion = ["Vanesa", 38, true, new Date("april 30 1984"),
    {
        titulo: '"Canción de Hielo y Fuego"',
        autor: "George R.R. Martin",
        fecha: "23 de Junio de 2011",
        url: "https://www.amazon.com/-/es/George-R-R-Martin/dp/8496208966"
    },
];

console.log(mi_informacion)