$(document).ready(function(){
  var getRandomInt = function (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  var getRandomColor = function(){
      var red = getRandomInt(0, 255);
      var green = getRandomInt(0, 255);
      var blue = getRandomInt(0, 255);    
      return "rgb(" + red + "," + green + "," + blue + ")"; //'rgb(#r, #g, #b)'
  }
  //on click functions 
  $(".btn-obj1").click( function(){
    $(".currentObj").replaceWith("<a-box class='currentObj' position='0 0.5 0' material='color: " + getRandomColor() + ";'></a-box>");
  	});
  $(".btn-obj2").click( function(){
    $(".currentObj").replaceWith("<a-sphere class='currentObj' position='0 0.5 0' material='color: " + getRandomColor() + ";'></a-box>");
    });
  $(".btn-obj3").click( function(){
    $(".currentObj").replaceWith("<a-plane class='currentObj'position='0 0.5 0' material='color: " + getRandomColor() + ";'></a-box>");
    });
});

