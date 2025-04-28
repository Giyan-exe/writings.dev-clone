const threeByThree = document.querySelectorAll('.three-box #grid-2 path');
const cubeContainer = document.querySelector(".cube-container");

const menuIcon = document.querySelectorAll('.menu-icon #SVGRepo_iconCarrier path');
const boxContainer = document.querySelector(".box-container");
const extraContainer = document.querySelector(".extra-container");

threeByThree.forEach(path => {
    path.addEventListener("mouseover", function(){
        threeByThree.forEach(path => {
            path.style.fill = "#FF7575";
            cubeContainer.style.paddingTop = "8px";
            cubeContainer.style.borderTop = "3px solid #FF7575";
        });
    });

     path.addEventListener("mouseout", function(){
         threeByThree.forEach(path => {
             path.style.fill = "#909090";
             cubeContainer.style.paddingTop = "11px";
             cubeContainer.style.borderTop = "none";
            
         });
     });
});

menuIcon.forEach(path => {
    path.addEventListener("mouseover", function(){
        menuIcon.forEach(path => {
            path.style.fill = "#FF7575";
            extraContainer.style.marginTop = "-3px";
            boxContainer.style.borderTop = "3px solid #FF7575";
        });
    });

     path.addEventListener("mouseout", function(){
         menuIcon.forEach(path => {
            path.style.fill = "#909090";
            extraContainer.style.marginTop = "0px";
             boxContainer.style.borderTop = "none";
         });
     });
});