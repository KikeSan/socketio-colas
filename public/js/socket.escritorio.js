var socket = io();

var searchParams = new URLSearchParams(window.location.search);

if (!searchParams.has('escritorio')) {
  //salimos de esta página
  window.location = 'index.html';
  //generamos un nuevo error para q el js no se siga ejecutando en esta pantalla
  //podría ser un return pero como no estoy dentro de una funcion no puede ser
  throw new Error('El escritorio es necesario');
}

var escritorio = searchParams.get('escritorio');
var label = $('small');

console.log(escritorio);

$('h1').text('Escritorio ' + escritorio);

$('button').on('click', function () {
  socket.emit('atenderTicket', { escritorio: escritorio }, function (resp) {
    console.log(resp);
    if (resp === 'No hay tickets') {
      label.text(resp);
      alert(resp);
      return;
    }
    label.text('Ticket ' + resp.numero);
  });
});
