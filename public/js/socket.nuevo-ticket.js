var socket = io();

var label = $('#lblNuevoTicket');

socket.on('connect', function() {
  console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
  console.log('Perdimos la conexión al servidor');
});

$('button').on('click', function() {
  socket.emit('siguienteTicket', null, function(siguienteTicket) {
    label.text(siguienteTicket);
  });
});
