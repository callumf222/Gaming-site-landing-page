var responsiveSlider = function() {
        
    var slider = document.getElementById("slider");
    var sliderWidth = slider.offsetWidth;
    var slideList = document.getElementById("slideWrap");
    var count = 1;
    var items = slideList.querySelectorAll("li").length;

    
    window.addEventListener('resize', function() {
      sliderWidth = slider.offsetWidth;
    });
    
    var prevSlide = function() {
      if(count > 1) {
        count = count - 2;
        slideList.style.left = "-" + count * sliderWidth + "px";
        count++;
      }
      else if(count = 1) {
        count = items - 1;
        slideList.style.left = "-" + count * sliderWidth + "px";
        count++;
      }
    };
    
    var nextSlide = function() {
      if(count < items) {
        slideList.style.left = "-" + count * sliderWidth + "px";
        count++;
      }
      else if(count = items) {
        slideList.style.left = "0px";
        count = 1;
      }
    };
    
    setInterval(function() {
      nextSlide()
    }, 3500);
    
    };
    
    window.onload = function() {
    responsiveSlider();  
    }



const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if(entry.isIntersecting){
        entry.target.classList.add('show');
    }



  });
}); 

const hiddenSideText = document.querySelectorAll('.hiddenSideText')
const hiddenMainText = document.querySelectorAll('.hiddenMainText')
const hiddenGameImage = document.querySelectorAll('.hiddenGameImage')


hiddenSideText.forEach((el) => observer.observe(el));
hiddenMainText.forEach((el) => observer.observe(el));
hiddenGameImage.forEach((el) => observer.observe(el));