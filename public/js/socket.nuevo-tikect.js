//Comando para establecer la conexion
let socket = io();

let label  = document.querySelector('#lblNuevoTicket');

socket.on('connect', function(){
    console.log('Conectado al servidor');
});

socket.on('disconnect', function(){
    console.log('Desconectado del servidor');
});

// on 'estadoActual'
socket.on('estadoActual', function(ultimoTikect){
    label.innerText = ultimoTikect.actual;
});


document.querySelector('button').addEventListener('click', function(){
    socket.emit('siguienteTikect', null , function(siguienteTikect){
        label.innerText = siguienteTikect;
    });

});
