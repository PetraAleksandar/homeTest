$(window).scroll(function() {
    if ($(this).scrollTop() >= 100) {
        $('.headerContainer').css('height','80px');
        $('.logo').css('font-size','38px');
        $('.nav_item').css('padding-top','35px');
        $('.social').css('padding-top','35px');
      }
      else{
        $('.headerContainer').css('height','110px');
        $('.logo').css('font-size','45px');
        $('.nav_item').css('padding-top','45px');
        $('.social').css('padding-top','45px');
      }
});
