$(document).ready(function () {
    $('.navbar2').hide();
    $(function(){
      $(window).scroll(function(){
        if ($(this).scrollTop() > 70) {
            $('.navbar2').fadeIn();
        } else {
            $('.navbar2').fadeOut();
        }
      });  
    });
});
 //mix it up
$('#container').mixItUp();