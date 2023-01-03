// CREATE A GREETING APP WITH JQUERY
// Create an input
// Create a button
// When clicked the button should print a greet message in an h1 header
// Ex: input: Petko output message: Hello there Petko!

// You must use JQuery to complete the task

console.log('test')

//here i got one way of doing this 
$('#greeting-button').click(function() {
    let name = $('#name').val();
    $('#greeting').text('Hello there,we are thrilled to meet you, ' + name + '!');
  });




//ovde pravime append na prazen html kade shto ke stavi field so input i button taka sto na dokumentot povikuvame funkcija

$(document).ready(function(){
    $('body').append('<input type="text" id="name1">');
    $('body').append('<button id="greet">Greet</button>');
  });
  
//    // ove do value na input ke isprintam grreeting message koga ke bide button-ot pritisnat

   $(document).ready(function(){
    $('#greet').click(function(){
      var names = $('#name1').val();
      $('body').append('<h1>Hello there,nice to meet you,' + names + '!</h1>');
    });
  });
  