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