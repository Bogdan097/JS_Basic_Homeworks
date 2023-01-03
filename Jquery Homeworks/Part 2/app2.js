// Create a header generator

// Create two inputs, one for text and one for color
// Create a button that says: generate h1
// Create an h3 element for messages
// When the button is clicked create a new header below the inputs and button
// The new header should have the text and color from the inputs
// If the person enters an invalid color or an empty text show an error message to the message element
//  You must use JQuery to complete the task
// THANK YOU!




$("#generate-button").click(function() {
    // Kreirame varijabli so id za text i color
    let text = $("#text-input").val();
    let color = $("#color-input").val();
    
    // Validation
    if (text === "") {
      $("#message").text("Please enter a text for the header.");
      return;
    }

    if (color === "") {
      $("#message").text("Please enter a color for the header.");
      return;
    }
    
    // kreirame header
    let header = $("<h1></h1>").text(text).css("color", color);
    
    // Clear message
    $("#message").text("");
    
    // Dodavame header na stranata
    $("body").append(header);
  });

  