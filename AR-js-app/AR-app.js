$(document).ready(function(){
  //user defined values 

  //on click functions 
  $('.btn-obj1').on('click', function(e){
    //should append html to show box on top of marker 
  	// adds object or changes the current object 
  	// adds text 
    // <a-marker preset='hiro'>
    //   <a-box position='0 0.5 0' material='opacity: 0.5; side: double;color:red;'>
    //     <a-torus-knot radius='0.26' radius-tubular='0.05'>
    //       <a-animation attribute="rotation" to="360 0 0" dur="5000" easing='linear' repeat="indefinite"></a-animation>
    //     </a-torus-knot>
    //   </a-box>
    // </a-marker>
    console.log(e)
    alert('i was clicked')
            // $('.objects').text('say hi');
            //$.appendTo($())

  	});
  $('.btn-obj2').on('click', function(){
  	//opens up setting 
    // plays sound 
    /*
    <a-marker preset='hiro'>
      <a-box position='0 0.5 0' material='opacity: 0.5; side: double;color:red;'>
        <a-torus-knot radius='0.26' radius-tubular='0.05'>
          <a-animation attribute="rotation" to="360 0 0" dur="5000" easing='linear' repeat="indefinite"></a-animation>
        </a-torus-knot>
      </a-box>
    </a-marker>

    */
  	
  	});
  $('.btn-obj3').on('click', function(){
    //opens up setting 
    /*
    <a-marker preset='hiro'>
      <a-box position='0 0.5 0' material='opacity: 0.5; side: double;color:red;'>
        <a-torus-knot radius='0.26' radius-tubular='0.05'>
          <a-animation attribute="rotation" to="360 0 0" dur="5000" easing='linear' repeat="indefinite"></a-animation>
        </a-torus-knot>
      </a-box>
    </a-marker>
    */
    
    });
});

