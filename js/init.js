(function($){
  $(function(){
  $('.left-one').click(function(){
    $('.card').toggleClass('flipped');
  });
  $('.left-two').click(function(){
    $('.cardtwo').toggleClass('flipped');
  });
    $('.right-four').click(function(){
    $('.cardthree').toggleClass('flipped');
  });
  }); // end of document ready
})(jQuery); // end of jQuery name space