//Mouseover

const frontPageNavLinks=document.querySelectorAll(".main-navigation a");
frontPageNavLinks.forEach(function(link){
    link.addEventListener("mouseover", function(event){
        event.target.style.fontWeight="bold";
    })
})

 //Keydown

const frontPageImages=document.querySelectorAll("img");
frontPageImages.forEach(function(image){
    image.addEventListener("keydown", function(event){
        if (event.key===13){
            console.log("hello");
        }
    })
})


