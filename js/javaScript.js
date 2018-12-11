$(document).ready(function() {
  //to hide our questions
  $('.jsForm').hide();

  //to show the questions one by non
  $('#quiz1').show();

  $('#quiz1 #submit').click(function() {
    $('.jsForm').hide();
    $('#quiz2').fadeToggle(1500);
    return false;
  });
  $('#quiz2 #submit').click(function() {
    $('.jsForm').hide();
    $('#quiz3').fadeToggle(1500);
    return false;
  });
  $('#quiz3 #submit').click(function() {
    $('.jsForm').hide();
    $('#quiz4').fadeToggle(1500);
    return false;
  });
  $('#quiz4 #submit').click(function() {
    $('.jsForm').hide();
    $('#quiz5').fadeToggle(1500);
    return false;
  });
  $('#quiz5 #submit').click(function() {
    $('.jsForm').hide();
    $('#results').fadeToggle(1500);
    return false;
  });

});
