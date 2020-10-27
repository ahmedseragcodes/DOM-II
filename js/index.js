//When attempting to drag the home navigation element, for instance to open in a new tab, change text color to red

const headerNav=document.querySelectorAll("header nav a");
headerNav[0].addEventListener("drag", function(event){
    event.target.style.color="red";
})

//When double clicking on an image, aqua border is created around it 
const imgHolder=document.querySelectorAll("img");
imgHolderArray=Array.from(imgHolder);
imgHolderArray.forEach(function(item){
    item.addEventListener("dblclick",function(event){
    event.target.style.border="1rem solid aqua";
});
});

//Using preventDefault to prevent document scroll when space bar is pressed 
document.addEventListener("keydown", function(event){
    event.preventDefault();
    if (event.keycode==32){
};
});

//increasing text-size of paragraphs when moused over
const paraHolder=document.querySelectorAll("p");
for (let i=0; i<paraHolder.length; i++){
paraHolder[i].addEventListener("mouseover", function(event){
    event.target.style.fontSize="2rem";
})
}
// const btnStorage=document.querySelectorAll(".btn");
// btnStorage[0].style.backgroundColor="red";

// btnStorage[0].addEventListener("click", function(event){
//     console.log(`event passing through ${event.currentTarget.nodeName}`)
// });

// document.addEventListener("click",function(event){
//     event.target.style.border="1rem solid black";
// })

// const containerHolder=document.querySelector(".home");
// containerHolder.addEventListener("click",function(event){
//     event.stopPropagation();
// })

