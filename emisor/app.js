var Emitter = require('./emitter');

var emtr = new Emitter(); // Crea un nuevo emisor de eventos
emtr.on('greet', () => {
    console.log('Somewhere, someone said hello.');
});
// En esta sección se están creando los nuevos eventos, ambos son del mismo tipo y ambos devuelven una cadena por la consola
emtr.on('greet', () => {
    console.log('A greeting occurred!');
});

console.log('Hello!');
emtr.emit('greet'); 
// Al ejecutar el evento se ejecutan los dos que se agregaron anteriormente, debido a que ambos son el mismo tipo de eventos


emtr.on('jump', () => {
    console.log('someone jumped!');
});

console.log(emtr); // emtr contiene dos tipos de eventos: 1. greet, el cual activa 2 funciones anónimos; 2. jump, este solo activa una función anónimo
emtr.emit('jump');