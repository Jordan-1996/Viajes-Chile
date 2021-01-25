$(document).ready(function(){

  $('a').click(function(event){  /*scroll*/ 
    if(this.hash !== ""){
      event.preventDefault();
      var hash = this.hash;
      $('html,body').animate({
        scrollTop: $(hash).offset().top
      },8000,function(){
        window.location.hash = hash
      })
    }
  })
  $('.carousel').carousel({
    interval: 2000
  })
})





/*var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000,
  wrap: false 
})*/