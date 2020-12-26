function passMessage() {
    let message = document.querySelector(".text-message").value; // get the value from input field
    
    if (message != "") { // if input is not empty print message
        
        document.querySelector(".message").innerHTML = message;
    } else { // else show error message
        document.querySelector(".error").style.display = "block";
        setTimeout(function(){ document.querySelector(".error").style.display = "none"; }, 3000);
        
    }
}