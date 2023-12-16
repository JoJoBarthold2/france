

function displayInput() {
    var userInput = document.getElementById("userInput").value;
    var output = "";
    if (validInput(userInput))
    { 
       
        var output = convertDate(userInput);
     
    }
    else{
        output = "Invalid Input. Fuck yourself";
    }
    document.getElementById("output").innerText = "User Input: " + output;
}

function validInput(string){
     // First check for the pattern
     if(!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString))
     return false;

 // Parse the date parts to integers
 var parts = dateString.split("/");
 var day = parseInt(parts[1], 10);
 var month = parseInt(parts[0], 10);
 var year = parseInt(parts[2], 10);

 // Check the ranges of month and year
 if(year < 1789|| year > 3000 || month == 0 || month > 12)
     return false;

 var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

 // Adjust for leap years
 if(year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
     monthLength[1] = 29;

 // Check the range of the day
 return day > 0 && day <= monthLength[month - 1];
}


function convertDate(input){
    var parts = dateString.split("/");
    var greg_day = parseInt(parts[1], 10);
    var greg_month = parseInt(parts[0], 10);
    var year = parseInt(parts[2], 10);
    var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
    const french_months = ["Vendémiaire", "Brumaire", "Frimaire", "Nivôse", "Pluviôse", "Ventôse", "Germinal", "Floréal", "Prairial", "Messidor", "Thermidor", "Fructidor"];
    const french_days = ["Primidi", "Duodi", "Tridi", "Quartidi", "Quintidi", "Sextidi", "Septidi", "Octidi", "Nonidi", "Decadi"];
    if(year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
     monthLength[1] = 29;

     var french_year = year - 1789;
    
     var day_in_year =0;
     for (let month = 0; month < greg_month; month++) {
        day_in_year += monthLength[month];
    }
    day_in_year += greg_day;
    

}