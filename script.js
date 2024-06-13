// Declare variables below to save the different divs of your story.
let option1 = document.querySelector(".option-one");
let option2 = document.querySelector(".option-two");
let option11 = document.querySelector(".option-1-1");
let option12 = document.querySelector(".option1-2");
let option111 = document.querySelector(".option-1-1-1");
let option112 = document.querySelector(".option1-1-2");
let option121 = document.querySelector(".option-1-2-1");
let option122 = document.querySelector(".option-1-2-2");
let findButton = document.querySelector("button");
let divStoryOpening = document.querySelector(".story-opening");
let divOptionOne = document.querySelector(".option-one-screen");
let divOptionTwo = document.querySelector(".option-two-end");
let divOptionOneOne = document.querySelector(".option-one-one");
let divOptionOneTwo = document.querySelector(".option-one-two");
let divOptionOneOneOne = document.querySelector(".option-one-one-one");
let divOptionOneOneTwo = document.querySelector(".option-one-one-two");
let divOptionOneTwoOne = document.querySelector(".option-one-two-one");
let divOptionOneTwoTwo = document.querySelector(".option-one-two-two");
let StartOver1 = document.querySelector(".startover1");
let StartOver2 = document.querySelector(".startover2");
let StartOver3 = document.querySelector(".startover3");
let StartOver4 = document.querySelector(".startover4");
let StartOver5 = document.querySelector(".startover5");
let FirstName;
let LastName;
let FirstNameInput = document.querySelector("#fname");
let LastNameInput = document.querySelector("#lname");
let NameButton = document.querySelector(".Submit");
let divName = document.querySelector(".Name");
let nameDisplay = document.querySelector(".namedisplay");

// When you're ready to make event handlers, uncomment the code below. 
//  - Then fill in the blanks with the correct variables.


// INSERT_VARIABLE.addEventListener('click', function(){
option1.addEventListener("click", function(){
    divStoryOpening.style.display = "none";
    divOptionOne.style.display = "block";
});
option2.addEventListener("click", function(){
    divStoryOpening.style.display = "none";
    divOptionTwo.style.display="block";
});
option11.addEventListener("click", function(){
    divOptionOne.style.display = "none";
    divOptionOneOne.style.display = "block";
});
option12.addEventListener("click", function(){
    divOptionOne.style.display = "none";
    divOptionOneTwo.style.display = "block";
});
option111.addEventListener("click", function(){
    divOptionOneOne.style.display = "none";
    divOptionOneOneOne.style.display = "block";
});
option112.addEventListener("click", function(){
    divOptionOneOne.style.display = "none";
    divOptionOneOneTwo.style.display = "block";
});
option121.addEventListener("click", function(){
    divOptionOneTwo.style.display = "none";
    divOptionOneTwoOne.style.display = "block";
});
option122.addEventListener("click", function(){
    divOptionOneTwo.style.display = "none";
    divOptionOneTwoTwo.style.display = "block";
});
StartOver1.addEventListener("click", function(){
    divOptionOneOneOne.style.display = "none";
    divStoryOpening.style.display = "block";
});
StartOver2.addEventListener("click", function(){
    divOptionOneOneTwo.style.display = "none";
    divStoryOpening.style.display = "block";
});
StartOver3.addEventListener("click", function(){
    divOptionOneTwoOne.style.display = "none";
    divStoryOpening.style.display = "block";
});
StartOver4.addEventListener("click", function(){
    divOptionOneTwoTwo.style.display = "none";
    divStoryOpening.style.display = "block";
});
StartOver5.addEventListener("click", function(){
    divOptionTwo.style.display = "none";
    divStoryOpening.style.display = "block";
});
NameButton.addEventListener("click", function(){
 FirstName= FirstNameInput.value;
 LastName= LastNameInput.value;
 console.log(FirstName);
 console.log(LastName);
 divName.style.display = "none";
 divStoryOpening.style.display = "block";
 nameDisplay.innerHTML = FirstName + " " + LastName; 
});
