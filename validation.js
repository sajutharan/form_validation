
function check(){
    var name =document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var zipcode=document.getElementById("zipcode").value;
    var number=document.getElementById("number").value;
    var regular1=/^[A-Za-z.]{2,23}$/;
    var regular2= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var regular3=/^[0-9]{5}(?:-[0-9]{4})?$/;
    var regular4=/^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
    if (regular1.test(name)){
        document.getElementById("errorName").innerHTML=""; 
    }else{
        document.getElementById("errorName").innerHTML="Name must be between 2 and 23 characters";
    }
    if(regular2.test(email)){
        document.getElementById("errorMail").innerHTML=""; 
    }else{
        document.getElementById("errorMail").innerHTML="Email is invalid";
    }
    if (regular3.test(zipcode)){
        document.getElementById("errorZipcode").innerHTML=""; 
    }else{
        document.getElementById("errorZipcode").innerHTML= "Zip Code is invalid";}
    if(regular4.test(number)){
        document.getElementById("errorPhoneNumber").innerHTML=""; 
    }else{
        document.getElementById("errorPhoneNumber").innerHTML="Phone Number is invalid";
        return false
    }
        
 }