// Line Through
$(':checkbox').change(function() {
  var that = this;
  $(this).parent().css('textDecoration', function() {
    return that.checked ? 'line-through' : "";
  });
});

// Function on hover
$('#newTodo').hover(function() {
  $('.test').slideUp(2000, function(){
    // $(this).remove();
  });
});
