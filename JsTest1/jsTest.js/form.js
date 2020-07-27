
function emailValidation(){
    var emailText = document.getElementById("emailId");
        var email = emailText.Value;
            var emailVal = /^(([^[]()[\]\\.,;:\s@\"]+(\.[^[]()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                emailText.style.color = "white";
            
            if(emailVal.test(email)){
                emailText.style.backgroundColor = "green";
                    }
            else{
                 emailText.style.backgroundColor = "red";
                // document.getElementById('emailId').innerHTML =' Username must be atleast 3 characters';
                }
            }
    