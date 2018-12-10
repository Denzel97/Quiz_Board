var score = 0;
var total = 5;
var points = 2;
var highest = total * points;

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

  //to show the questions one by non
  $('#quiz1').show();

  $('#quiz1 #submit').click(function() {
    $('.jsForm').hide();
    process('quiz1');
    $('#quiz2').fadeToggle(1000);
    return false;
  });
  $('#quiz2 #submit').click(function() {
    $('.jsForm').hide();
    process('quiz2');
    $('#quiz3').fadeToggle(1000);
    return false;
  });
  $('#quiz3 #submit').click(function() {
    $('.jsForm').hide();
    process('quiz3');
    $('#quiz4').fadeToggle(1000);
    return false;
  });
  $('#quiz4 #submit').click(function() {
    $('.jsForm').hide();
    process('quiz4');
    $('#quiz5').fadeToggle(1000);
    return false;
  });
  $('#quiz5 #submit').click(function() {
    $('.jsForm').hide();
    process('quiz5');
    $('#results').fadeToggle(1000);
    return false;
  });
});

function process(quiz) {
  if (quiz == "quiz1") {
    var submitted = $('input[name=quiz1]:checked').val ();
    if (submitted == sessionStorage.a1) {
      score++;
    };
  };
  if (quiz == "quiz2") {
    var submitted = $('input[name=quiz2]:checked').val ();
    if (submitted == sessionStorage.a2) {
      score++;
    };
  };
  if (quiz == "quiz3") {
    var submitted = $('input[name=quiz3]:checked').val ();
    if (submitted == sessionStorage.a3) {
      score++;
    };
  };
  if (quiz == "quiz4") {
    var submitted = $('input[name=quiz4]:checked').val ();
    if (submitted == sessionStorage.a4) {
      score++;
    };
  };
  if (quiz == "quiz5") {
    var submitted = $('input[name=quiz5]:checked').val ();
    if (submitted == sessionStorage.a5) {
      score++;
    };
    $('#results').html('<h3>Your final score is: ' + score + ' out of 10' </h3><a href="index.html">Take Quiz Again</a> );
  };
  return false;
};


window.addEventListener('load', 'init', 'false');
