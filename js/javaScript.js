var score = 0;
var total = 5;
var points = 1;
var highest = 'total + point';

function init() {
  sessionStorage.setItem('a1', 'd');
  sessionStorage.setItem('a2', 'a');
  sessionStorage.setItem('a3', 'd');
  sessionStorage.setItem('a4', 'b');
  sessionStorage.setItem('a5', 'c');
}

$(document).ready(function() {
  //to hide our questions
  $('.jsForm').hide();

  //to show the questions one by one
  $('#quiz1').show();

  $('.jsForm #submit').click(function() {
    current = $(this).parents('form:first').data('question');
    next = $(this).parents('form:first').data('question') + 1;

    $('.jsForm').hide();
    $('#quiz' + next + '').fadeToggle(1500);
    process('' + current + '');
    return false;
  });

});

//introduce 'n' to represent Number
function process(n) {
  var submitted = $('input[name=quiz' + n + ']:checked').val();
  if (submitted == sessionStorage.getItem('a' + n + '')) {
    score++;
  }
  if (n == total) {
    $('#results').html('<h3>Your final score is: ' + score + ' out of 5</h3><a href="index.html">Take Quiz Again</a>');
  }
  return false;
}

window.addEventListener('load', init, false);
