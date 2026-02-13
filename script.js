//==============================================================
//✅ Main responsive logic
//==============================================================
function responsivePoster() {
  if (window.matchMedia("(max-height: 500px)").matches) {

  } 
  else if (window.matchMedia("(max-height: 600px)").matches) {
    document.querySelector("#mainText2").innerHTML = "808 Commonwealth Ave <br> Room 410 or Zoom <br> Boston University Graphic Design";
    document.querySelector("#mainText2").style.textAlign = "left";
    document.querySelector("#mainText2").style.bottom = "30px";
    document.querySelector("#mainText2").style.left = "30px";
    document.querySelector("#image").src = "./img/tiri_oracle2.jpg";
    document.querySelector("#image").style.right = "30px";
  } 
  else { // ℹ️ Default
    document.querySelector("#mainText2").innerHTML = "Performance Artist <br> Creative Coder <br> Educator";
    document.querySelector("#mainText2").style.textAlign = "right";
    document.querySelector("#mainText2").style.right = "30px";
    document.querySelector("#image").src = "./img/tiri.jpeg";
    document.querySelector("#image").style.bottom = "30px";
    document.querySelector("#image").style.left = "50px";
    document.querySelector("#image").style.rotate = "0deg";
    // document.querySelector("#image").style.rotate = "-30deg";
  }
}
const textElement = document.getElementById('mainText1');
const text = "Tiri Kananuruk";
let i = 0;
const speed = 175;
function typeWriter() {
  if (i < text.length) {
    textElement.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

// Start the animation
typeWriter();

//==============================================================
//❓Initial run + resize listener
//==============================================================
responsivePoster(); // Initial run
window.addEventListener("resize", responsivePoster); // Update on resize
