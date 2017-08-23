// wait for the DOM to finish loading
console.log("js is linked and go to go!");

$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
var player =1;

$('.square').on('click', function(event) {
  var squareSelected = $(this);
  //check to see if its either x or o
  //we replaced "ex" and "oh" with "fa fa times and o"
  if(squareSelected.hasClass('fa fa-times') || squareSelected.hasClass('fa fa-circle-o')){
  alert('This square has already been selected! Please select another square!')
} else {
  //these statement below creates a turn system with both players 1 and 2.
  if(player ===1) {
    squareSelected.addClass('fa fa-times');
    if(checkIfPlayerWon('fa fa-times')) {
    //if won then true, if not then false and itll switch the player
      alert ('Congrats! Player ' + player +
  ' has won!');
  } else {
    player = 2;
    }
  }else {
    squareSelected.addClass('fa fa-circle-o');
    if(checkIfPlayerWon('fa fa-circle-o')) {
    //if won then true, if not then false and itll switch the player
    alert ('Congrats! Player ' + player +
  ' has won!');
    } else {
      player = 1;
     }
    }
  }
});
//this function here will see if either player won
function checkIfPlayerWon(symbol) {
  if($('.sq1').hasClass(symbol) && $('.sq2').hasClass(symbol) && $('.sq3').hasClass(symbol)) {
    return true;
  } else if ($('.sq4').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq6').hasClass(symbol)) {
    return true;
  } else if ($('.sq7').hasClass(symbol) && $('.sq8').hasClass(symbol) && $('.sq9').hasClass(symbol)) {
    return true;
  } else if ($('.sq1').hasClass(symbol) && $('.sq3').hasClass(symbol) && $('.sq7').hasClass(symbol)) {
    return true;
  } else if ($('.sq2').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq8').hasClass(symbol)) {
    return true
  } else if ($('.sq3').hasClass(symbol) && $('.sq6').hasClass(symbol) && $('.sq9').hasClass(symbol)) {
    return true;
  } else if ($('.sq1').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq9').hasClass(symbol)) {
    return true;
  } else if ($('.sq3').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq7').hasClass(symbol)) {
    return true;
  } else {
    return false;
  }

}

});
