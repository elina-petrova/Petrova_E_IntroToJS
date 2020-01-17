//this is a self-evoking annonymus function = running right away
//alse called an IIFE
//also called a module

(()=> {
  //print("some message")

  console.log("some message - from JavaScript");

  let theHeading = document.querySelector("h1"),
      svgImage = document.querySelector("#svgGraphic"),
    //  svgImage2 = document.querySelector("#svgGraphic2");
      allSVGs = document.querySelectorAll(".svg");


//log the id of the svg to the console when a user hovers on it
  function logSVG(){
    console.log(this.id);
  }
  // this function changes the heading text
  //function changeText(){
  //  theHeading.textContent = "there is no way out of JS";
  //}

  //for (el in allSVGs){

  //}


  //theButton.addEventListener('click', changeText);
  //svgImage.addEventListener('click', logSVG);
  svgImage.addEventListener('click', changeSVG);
  //svgImage2.addEventListener('click', logSVG);

  //loop throuh the collection and apply out event handlign to each element
  allSVGs.forEach(item => item.addEventListener('click', logSVG));

  //document.querySelector('h1').textContent = "there is no way out of JS";


})();
