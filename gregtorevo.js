function displayInput() {
    var userInput = document.getElementById("userInput").value;
    if (validInput(userInput))
    { 
        var convertedInput = convertInput(userInput);
        var output = computeDate(convertedInput);
      
    }
    else{
        output = "Invalid Input. Fuck yourself";
    }
    document.getElementById("output").innerText = "User Input: " + output;
}

function validInput(string){
return false;
}

function convertInput(validInput){

}

function computeDate(convertInput){

}
