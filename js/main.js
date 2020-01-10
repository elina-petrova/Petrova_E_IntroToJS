//this is a self-evoking annonymus function = running right away
//alse called an IIFE
//also called a module

(()=> {
  //print("some message")

  console.log("some message - from JavaScript");

  let theButton = document.querySelector("#myButton"),
      theHeading = document.querySelector("h1"),
      svgImage = document.querySelector("#svgGraphic");


//log the id of the svg to the console when a user hovers on it
  function logSVG(){
    console.log(this.id);
  }
  // this function changes the heading text
  function changeText(){
    theHeading.textContent = "there is no way out of JS";
  }

  theButton.addEventListener('click', changeText);
  svgImage.addEventListener('mouseover', logSVG);

  //document.querySelector('h1').textContent = "there is no way out of JS";


})();
