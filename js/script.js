
$(document).ready(function() {

    // $( ".nav-item" ).on( "click", function() {
    //     $( "li" ).removeClass('active');
    //     $(this).addClass('active');
    //   });

    $('.nav-item').click(function(){
        $('.nav-item').removeClass('active');
        $(this).addClass('active') ;
    });

});