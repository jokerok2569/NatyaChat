const socket = io();

const messages = document.getElementById('messages');

const form = document.getElementById('form');

const input = document.getElementById('input');


form.addEventListener('submit', function(e) {

  e.preventDefault();

  if (input.value) {

    socket.emit('new_message', input.value);

    input.value = '';

  }

});