//define functions here

/*Define a function getIt that does not accept a parameter. The function should bind a click event to the p tag. When the paragraph is clicked, the function should alert "Hey!".*/
function getIt() {
  $('p').on('click', () => {
   alert("Hey!");
  });
}

/*Define a function frameIt that does not accept a parameter. The function should bind the load event that adds the class tasty to the image to add a red frame to the image.*/
function frameIt() {
  $('img').on("load", () => {
    $('img').addClass("tasty");
  });
}

/*Define a function pressIt that does not accept a parameter. The function should bind a keydown event to the input field of the form that alerts a user when they have pressed the G key.*/
function pressIt() {
  $(document).on('keypress', () => {
    
  });
}

$(document).ready(function(){

// call functions here

});
