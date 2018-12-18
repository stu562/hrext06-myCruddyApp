$(document).ready(function(){
  console.log('jQuery right doc ');//test if document ready worked 

  var saveValues = function(){
    var array = [];
    var lsNames = localStorage.getItem('lsValue') // tries to locate inside LocalStarge, null by default
  
    if (!lsNames){ //null case 
      lsNames = ''; 
    }

    array = lsNames.split(',');
    array.push(document.getElementById('lsValue').value);
    lsNames = array.join(',');//comma side effect from null case 
    localStorage.setItem('lsValue', lsNames);
    showValues();//
    }

  var showValues = function() {
    var ls = localStorage.getItem('lsValue');
    document.getElementById('list-display-field').innerHTML = "Memory: "+ls.slice(1);
    console.log(localStorage)//help to see inside ls storage 
  } 

  // write to local storage from input when button save clicked
  $('.btn-submit').on('click', function(){
    // localStorage.setItem('inputFieldValue', $('.text-entry').val());
    // var myItemInStorage = localStorage.getItem('inputFieldValue');
    // console.log('myItemInStorage', myItemInStorage); // verify it was added 
    
    saveValues()
    // $('.list-display-field').text(arr); // ??

  });

  // delete from local storage when delete button clicked
  $('.btn-delete-all').on('click', function(){
    localStorage.setItem('lsValue','');
    showValues()
    // localStorage.removeItem('.text-entry');
    // $('.list-display-field').text('');
  });
  //  $('.btn-delete-one').on('click', function(){
  //   // localStorage.setItem('stuff','');
  //   localStorage.removeItem('stuff');
  //   // $('.list-display-field').text('');
  //   showLS()
  // });

  //memory button link 
  $('.btn-memory').on('click', function(){
    showValues()
  });

});

//local storage display below 

/*
    - [ ] What about if we have more than one value?
    - [ ] how do we add multiple values?
        - [ ] maybe use an array?
        - [ ] maybe use multiple keys? create new keyname each time

        create array container 
        add JSON.stringify(value) into array
        when we need it grab JSON.parse(array[i]) 
*/
