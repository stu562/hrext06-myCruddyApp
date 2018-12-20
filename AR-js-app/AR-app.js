$(document).ready(function(){
  //user defined values
  //error with jquery script 
  var getRandomInt = function (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }//random interger

  var getRandomColor = function(){
      var red = getRandomInt(0, 255);
      var green = getRandomInt(0, 255);
      var blue = getRandomInt(0, 255);    
      return "rgb(" + red + "," + green + "," + blue + ")"; //'rgb(#r, #g, #b)'
  }
  
  //on click functions 
  $(".btn-obj1").click( function(e){
    var currentColor = getRandomColor()

    $(".currentObj").replaceWith("<a-box class='currentObj' position='0 0.5 0' material='color: " + currentColor + ";'></a-box>");
    // $('objectselector').appendTo("<a-box position='0 0.5 0' material='color: orange;'></a-box>");
  	});
  $(".btn-obj2").click( function(e){
    var currentColor = getRandomColor()

    $(".currentObj").replaceWith("<a-sphere class='currentObj' position='0 0.5 0' material='color: " + currentColor + ";'></a-box>");
    // $('objectselector').appendTo("<a-box position='0 0.5 0' material='color: orange;'></a-box>");

    // alert(currentColor + 'applied')
    });
  $(".btn-obj3").click( function(e){
    var currentColor = getRandomColor()

    $(".currentObj").replaceWith("<a-plane class='currentObj'position='0 0.5 0' material='color: " + currentColor + ";'></a-box>");
    // $('objectselector').appendTo("<a-box position='0 0.5 0' material='color: orange;'></a-box>");
    });
});

