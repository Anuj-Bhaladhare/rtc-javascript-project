const allButtons = document.querySelectorAll("button");
const inputDisplay = document.querySelector("[data-display]");

let string = "";

allButtons.forEach(button => {
  button.addEventListener("click", event => {

    if(event.target.innerHTML == "=")
    {
        string = eval(string);
        inputDisplay.value = string;
    }

    else if(event.target.innerHTML == "AC")
    {
       string = "";
       inputDisplay.value = string;
    }

    else if(event.target.innerHTML == "C")
    {
        string = string.substring(0, string.length - 1);
        inputDisplay.value = string;
    }

    else if(event.target.innerHTML == "%")
    {
        string += "";
        inputDisplay.value = string;
    }

    else
    {
        string += event.target.innerHTML;
        inputDisplay.value = string;
    }
  } );
} );

