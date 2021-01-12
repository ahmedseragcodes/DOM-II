// Stop Propagation + click event 

const allElementsArray=Array.from(document.all);

allElementsArray.forEach(function(element){
    element.addEventListener("click", function(event){
        console.log("Target", event.target);
        console.log("Current Target", event.currentTarget);
        event.stopPropagation();
    })
})

//Drag Drop, DROP INCOMPLETE

const frontPageImgsArray=Array.from(document.querySelectorAll("img"));

frontPageImgsArray.forEach(function(img){
    img.addEventListener("drag", function(event){
        console.log("target has been dragged");
    })
})

frontPageImgsArray.forEach(function(img){
    img.addEventListener("drop", function(event){
        console.log("target has been dropped");
    })
})

//dblclick on images adds border 

frontPageImgsArray.forEach(function(img){
    img.addEventListener("dblclick", function(event){
        event.target.style.border="1rem ridge black";
    })
})

//escape key removes borders from images

window.addEventListener("keydown", function(event){
    if (event.key==="Escape"){
        console.log("hello");
        frontPageImgsArray.forEach(function(img){
            img.style.border="none";
        })
    }
})

//mouseover event creates increases font size of target paragraph 

const allParagraphsArray=Array.from(document.querySelectorAll("p"));
allParagraphsArray.forEach(function(p){
    p.addEventListener("mouseover", function(event){
        console.log("selected");
        event.target.style.fontSize="2rem";
    })
})

//Mouseenter on pics adds border

frontPageImgsArray.forEach(function(img){
    img.addEventListener("mouseenter", function(event){
        event.target.style.border="1rem ridge black";
    })
})