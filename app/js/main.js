$(function (){
  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true
  });

  $('.product-cart__start').rateYo ({
    starWidth: "17px",
    normalFill: "#8d8d8d",
    ratedFill: "#ffc35b",
    readOnly: true
  })

})