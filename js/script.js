// ==========================
// ReserveChain Demo Script
// ==========================


// Smooth page loading

document.addEventListener("DOMContentLoaded",()=>{


    console.log(
        "ReserveChain Demo Loaded Successfully"
    );


});





// ==========================
// Certificate Verification Demo
// ==========================


const verifyButton = document.querySelector(
".verify-box .gold-btn"
);



if(verifyButton){


verifyButton.addEventListener(
"click",
()=>{


const certificate =
document.querySelector(
".verify-box input"
).value;



if(certificate===""){


alert(
"Please enter certificate number"
);


}

else{


alert(

"Certificate Verified Successfully!\n\nCertificate ID: "
+ certificate

);


}



});


}






// ==========================
// Button Animation
// ==========================


const buttons =
document.querySelectorAll("button");



buttons.forEach(button=>{


button.addEventListener(
"mouseenter",
()=>{


button.style.transform =
"translateY(-3px)";


});



button.addEventListener(
"mouseleave",
()=>{


button.style.transform =
"translateY(0)";


});


});