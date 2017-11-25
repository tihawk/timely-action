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
    event.preventDefault();
    var time = $('input').val();
    //alert(time);
    $.get(('/'+ time), function(response) {
      //alert(response['natural']);
      $("#dreams").html("<li>natural: " + response["natural"] + "</li><li>unixtime: " + response["unixtime"] + "</li>" );
      /*$('<li></li>').text(dream).appendTo('ul#dreams');*/
      $('input').val('');
      $('input').focus();
    });
  });

});
