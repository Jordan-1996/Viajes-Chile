$(document).ready(function(){

  $('a').click(function(event){  /*scroll*/ 
    if(this.hash !== ""){
      event.preventDefault();
      var hash = this.hash;
      $('html,body').animate({
        scrollTop: $(hash).offset().top
      },8000,function(){
        window.location.hash = hash;
      })
    }
  })  
  
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })



})


/*var myCarousel = document.querySelector('#carouselExampleInterval')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000,
  wrap: false 


  $('.carousel').carousel({
    interval: 2000
  })
})*/