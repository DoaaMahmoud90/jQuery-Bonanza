$('#fadeOut').click(function(){
  $('#deletedText').text('');
});

$('#append').click(function(){
  $('#appendedText').append(document.createTextNode('This text has been appended.'));
});

$('#changeColor').click(function(){
  $('#coloredText').css('color', 'red');
});

$('h3').mouseover(function(){
  $('h3').hide();
  alert('The title is hidden');
})