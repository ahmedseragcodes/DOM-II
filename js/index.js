//Mouseover that bolds front page header nav links 

const frontPageNavLinks=document.querySelectorAll(".main-navigation a");
frontPageNavLinks.forEach(function(link){
    link.addEventListener("mouseover", function(event){
        event.target.style.fontWeight="bold";
    })
})

//preventDefault preventing window refresh upon click
frontPageNavLinks.forEach(function(link){
    link.addEventListener("click", function(event){
        event.target.preventDefault();
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

//Load console logs successful image load

const frontPageImages=document.querySelectorAll("img");
frontPageImages.forEach(function(image){
    image.addEventListener("load", function(event){
        console.log("successful image load");
    })
})

//Creating Form For Subscribers to Use Certain Events / Event Listeners 

//Creation
const frontPageFooter=document.querySelector(".footer");
const footerSubForm=document.createElement("form");
const footerSubFormEmail=document.createElement("input");
footerSubFormEmail.type="email";
footerSubFormEmail.name="email";
footerSubFormEmail.placeholder="Enter Your Email";
const footerSubFormLabel=document.createElement("label");
footerSubFormLabel.for="email";
footerSubFormLabel.textContent="Enter Your Email For The Latest Deals:";

//Styling
footerSubForm.style.boxSizing="border-box";
footerSubFormEmail.style.padding="1rem";
footerSubForm.style.display="flex";
footerSubForm.style.justifyContent="center";
footerSubFormEmail.style.border="1rem ridge aqua";
footerSubFormLabel.style.margin="1rem";
footerSubFormLabel.style.display="flex";
footerSubFormLabel.style.justifyContent="center";
footerSubFormLabel.style.alignItems="center";
footerSubFormLabel.style.fontSize="1.8rem";

//Appending
frontPageFooter.append(footerSubForm);
footerSubForm.append(footerSubFormEmail);
footerSubForm.prepend(footerSubFormLabel);


//Footer expands email form upon focus 
footerSubFormEmail.addEventListener("focus", function(event){
    event.target.style.padding="2rem";
})

//Form text select adds nice gradient background color
footerSubFormEmail.addEventListener("select", function(event){
    event.target.style.backgroundColor="#FBAB7E";
    event.target.style.backgroundImage="linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)"
    console.log("it occured");
})


//Resize window console logs message resized 

    window.addEventListener("resize",function(event){
        console.log("resized");
    })

//Scroll - Can't get it to work 

frontPageMainContent.forEach(function(textBlurb){
    textBlurb.addEventListener("scroll",function(event){
        if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350){
        event.target.style.color="green";
        }
    })
})

//Image DoubleClick results in ridged border around image, added stopPropagation so clicks don't trigger event listeners on parent elements

const frontPageImgs=document.querySelectorAll("img");
frontPageImgs.forEach(function(image){
    image.addEventListener("dblclick", function(event){
        event.target.style.border="1rem ridge aqua";
        event.stopPropagation();
    })
})

//mouseenter bolds front page paragraphs 

const frontPageParas=document.querySelectorAll("p");
frontPageParas.forEach(function(para){
    para.addEventListener("mouseenter", function(event){
        event.target.style.fontWeight="bold";
    })
})

