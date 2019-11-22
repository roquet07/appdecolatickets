//Comando para establecer la conexion
let socket = io();


 let escritorioTikect = document.querySelector('h1');
 let label = document.querySelector('small');


socket.on('connect', function(){
    console.log('Conectado al servidor');
});

socket.on('disconnect', function(){
    console.log('Desconectado del servidor');
});

let searchParams = new URLSearchParams( window.location.search );
if(!searchParams.has('escritorio') ){
    window.location = 'index.html';
    throw new Error('El escritorio es necesario');


}else {

    let escritorio = searchParams.get('escritorio');
    console.log(escritorio);
    escritorioTikect.innerText = `Escritorio ${escritorio}`;

    document.querySelector('button').addEventListener('click', function( ){

        socket.emit('atenderTicket',{ escritorio:escritorio }, function(resp){
              console.log(resp);

              if(resp ==='No hay tickets'){
                  label.innerText = resp;
              }else{
                label.innerText = resp.numero;
              }
        });
  });
}





