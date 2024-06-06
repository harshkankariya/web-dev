

function calculate()
 {
    var n = prompt("Enter a number:");

    if (!isNaN(n) && n > 0) {
        
        n = parseInt(n);

        var factorial = 1;
        for (var i = 1; i <= n; i++) {
            factorial *= i;
        }

        alert("The factorial of " + n + " is " + factorial);
    } 
    else {
        alert("Please enter a valid positive number.");
    }
    return ;
}
