// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

$(function() {
  console.log('hello world :o');
  
  /*$.get('/dreams', function(dreams) {
    dreams.forEach(function(dream) {
      $('<li></li>').text(dream).appendTo('ul#dreams');
    });
  });*/

  $('form').submit(function(event) {
    //event.preventDefault();
    var time = $('input').val();
    console.log(time);
    $.get(('/'+ time), function(response) {
      console.log(response);
      $("ul#dream").html("<li>natural: " + response["natural"] + "</li>");
      /*$('<li></li>').text(dream).appendTo('ul#dreams');*/
      $('input').val('');
      $('input').focus();
    });
  });

});
