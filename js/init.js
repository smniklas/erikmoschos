(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.show-btn').click(function(){
      $('.main-text').css("font-size","0px");
      $('.hover-specific').css("margin","4px").css("text-transform", "uppercase");
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space