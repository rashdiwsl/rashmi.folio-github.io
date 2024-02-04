var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");

    function opemtab(tabname){
        for(tablink of tablinks){
            tablink.classList.remove("active-link")
        }
        for(tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab")
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    
    }

function validateForm(){
var name = document.getElementById("Name").value;
var email = document.getElementById("email").value;
var message = document.getElementById("Message").value;

    if(name == ""){
        alert("Name must be filled out");
        return false;
    }
    
    if(email == ""){
        alert('Please enter your email address.');
        return false;
    }else{
    // Regular expression for email validation
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.match(emailRegex)) {
        alert('Please enter a valid email address.');
        return false;
    }
    }
    if(message == ""){
        alert("Message must be filled out");
        return false;
    }else{
        alert("Thank you for your feedback");
        invisibleForm();
        return true;
    } 
}

function invisibleForm(){
    let hide = document.querySelector("#drop-message");
    hide.style.display ="none";
    document.getElementById("thankyou_message").style.display = 'block';
} 