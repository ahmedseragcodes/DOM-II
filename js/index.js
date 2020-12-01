//Mouseover that bolds front page header nav links 

const frontPageNavLinks=document.querySelectorAll(".main-navigation a");
frontPageNavLinks.forEach(function(link){
    link.addEventListener("mouseover", function(event){
        event.target.style.fontWeight="bold";
    })
})

 //Keydown that takes you to the top of the page when you hit enter 

document.addEventListener("keydown", function(event){
        if (event.key==="Enter"){
            event.target.scrollIntoView();
        }
    })

//Wheel changing front page main body content color 
const frontPageMainContent=document.querySelectorAll(".text-content");
frontPageMainContent.forEach(function(textBlurb){
    textBlurb.addEventListener("wheel",function(event){
        event.target.style.color="brown";
    })
})


