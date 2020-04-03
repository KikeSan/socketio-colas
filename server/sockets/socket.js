const { io } = require('../server');

const { TicketControl } = require('../classes/ticket-control');

const ticketControl = new TicketControl();

io.on('connection', client => {
  console.log('Usuario conectado');

  client.on('disconnect', () => {
    console.log('Usuario desconectado');
  });

  // Escuchar el cliente
  client.on('siguienteTicket', (data, callback) => {
    let siguiente = ticketControl.siguienteTicket();
    console.log(siguiente);
    callback(siguiente);
  });

  client.emit('estadoActual', {
    actual: ticketControl.getUltimoTicket()
  });
});
