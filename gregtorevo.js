document.addEventListener("input", function(event) {
    var userInput = event.target.value;
    document.getElementById("output").innerText = "User Input: " + userInput;
});