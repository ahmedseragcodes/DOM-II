const headerNav=document.querySelectorAll("header nav a");
headerNav[0].addEventListener("drag", function(event){
    event.target.style.color="red";
})



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

