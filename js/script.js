document.getElementById("btnLogin").addEventListener("click", function(){
    document.getElementById("form").style.display = "none";
    document.getElementById("login").style.display = "flex";
});  

document.getElementById("btnRregistration").addEventListener("click", function(){
   document.getElementById("form").style.display = "none";
    document.getElementById("registration").style.display = "flex";
});

async function getResponse() {
    let response = await fetch('https://my-json-server.typicode.com/TomaszJaworski/test-api/news');
    let content = await response.json();
    content = content.splice(0, 5);

    let list = document.getElementById('out');
    let key;
    for (key in content){
        list.innerHTML += `
        <div class="news__item" >
            <div class="news__item-title">
                <img src="icons/double-quotes.png" alt="double-quotes">
                ${content[key].title}
            </div>
            <div class="news__item-date">${content[key].date}</div>
            <img class="news__item-img" src="${content[key].image}" alt="image">
            <div class="news__item-text">${content[key].text}</div>
            </div>
        `;
        content[key];
        console.log(key);
        
    }  
}
getResponse();


let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slider__item");
    let dots = document.getElementsByClassName("slider__dots-item");
  
    for (let slide of slides) {
        slide.style.display = "none";
    }  
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    } 
    slides[slideIndex - 1].style.display = "block"; 
    dots[slideIndex - 1].className += " active";
}
