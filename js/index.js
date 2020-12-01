//Mouseover

const frontPageNavLinks=document.querySelectorAll(".main-navigation a");
frontPageNavLinks.forEach(function(link){
    link.addEventListener("mouseover", function(event){
        event.target.style.fontWeight="bold";
    })
})

 //Keydown

document.addEventListener("keydown", function(event){
        if (event.key==="Enter"){
            event.target.scrollIntoView();
        }
    })



