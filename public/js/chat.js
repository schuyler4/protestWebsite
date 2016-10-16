var socket = io();
$(document).ready(function() {
  $('#textContainer').scrollTop(1).scrollTop(0);

  $('#submit').click(function() {
    var message = $('#chatInput').val();
    socket.emit('message', message)
    $('#chatInput').val('');
    return false
  });

  socket.on('starting messages', function(messages) {
    for(i in messages) {
      $('#messageDiv').prepend($('<div id="message"><p>').text(messages[i]));
    }
  });

  socket.on('message', function(message) {
    console.log("hello");
    $('#messageDiv').prepend($('<div id="message"><p>').text(message));
  });

});
