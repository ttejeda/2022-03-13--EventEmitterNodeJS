function Emitter(){
    this.events = {};
}

Emitter.prototype.on = function (type, listener){
    this.events[type] = this.events[type] || []; // Comprueba si existe el evento
    this.events[type].push(listener); // Agrega un nuevo evento
}

Emitter.prototype.emit = function (type) {
    if(this.events[type]){ // Si existe, haz:
        this.events[type].forEach(function (listener){
            listener(); // Ejecuta el evento que le marca "type"
        });
    }    
}

module.exports = Emitter;