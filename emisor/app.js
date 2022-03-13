//var Emitter = require('./emitter');
var Emitter = require('events');
var config = require('./config');

var emtr = new Emitter(); // Crea un nuevo emisor de eventos
emtr.on(config.events.GREET, () => {
    console.log('Somewhere, someone said hello.');
});
// En esta sección se están creando los nuevos eventos, ambos son del mismo tipo y ambos devuelven una cadena por la consola
emtr.on(config.events.GREET, () => {
    console.log('A greeting occurred!');
});

console.log('Hello!');
emtr.emit('greet'); 
// Al ejecutar el evento se ejecutan los dos que se agregaron anteriormente, debido a que ambos son el mismo tipo de eventos


emtr.on(config.events.JUMP, () => {
    console.log('someone jumped!');
});

//console.log(emtr); // emtr contiene dos tipos de eventos: 1. greet, el cual activa 2 funciones anónimos; 2. jump, este solo activa una función anónimo
emtr.emit('jump');


// Notas de la práctica 7
//Pese a los cambios, la ejecución no cambió
//Después de adaptar las llamadas de funciones, todas siguieron funcionando igual, ya que está especificado el type que utilizará
    // y no tener que repetir la palabra 'greet' para evitar errores humanos