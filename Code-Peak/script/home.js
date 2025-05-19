//--------------------------------------------------------------------
// Анимация статистики на главной странице
function animateNumber(element, start, end, duration) {
    let startTime = null;

    function update(currentTime) {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const currentNumber = Math.floor(progress * (end - start) + start);
      element.textContent = currentNumber;
      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }
    requestAnimationFrame(update);
}
const counterElement = document.getElementById('counter');
animateNumber(counterElement, 0, 37, 2000);
const countertwo = document.getElementById('countertwo');
animateNumber(countertwo, 0, 50, 2000);


//--------------------------------------------------------------------
// Анимация написания
const text = "CODE PEAK";
let index = 0; 
let isDeleting = false; 
const speed = 100;
const eraseSpeed = 50;
function typeWriter() {
const textElement = document.getElementById("name-site");
if (!isDeleting && index < text.length) {
    textElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
} 
else if (isDeleting && index > 0) {
    textElement.textContent = textElement.textContent.slice(0, -1);
    index--;
    setTimeout(typeWriter, eraseSpeed);
} 
else if (index === text.length) {
    setTimeout(() => {
    isDeleting = true; 
    typeWriter(); 
    }, 1000); 
} 
else if (index === 0 && isDeleting) {
    isDeleting = false; 
    setTimeout(typeWriter, 500); 
}
}
typeWriter(); 



//--------------------------------------------------------------------
// Открытие и закрытие FAQ
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
};