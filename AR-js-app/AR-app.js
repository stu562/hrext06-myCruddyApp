$(document).ready(function(){
  //user defined values
  //error with jquery script 


  //on click functions 
  $('.btn-obj1').on('click', function(){
    $('objectselector').appendTo("<a-box position='0 0.5 0' material='color: orange;'></a-box>");
  	});
  $('.btn-obj2').on('click', function(){
  	$('objectselector').appendTo("<a-sphere position='0 0.5 0' material='color: orange;'></a-box>")
  	});
  $('.btn-obj3').on('click', function(){
    $('objectselector').appendTo("<a-plane position='0 0.5 0' material='color: orange;'></a-box>")
    });
});

