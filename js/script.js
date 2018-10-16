
$(document).ready(function() {

    // $( ".nav-item" ).on( "click", function() {
    //     $( "li" ).removeClass('active');
    //     $(this).addClass('active');
    //   });

    $('.nav-item').click(function(){
        $('.nav-item').removeClass('active');
        $(this).addClass('active') ;
    });

    // un texte qui apparait lettre par lettre comme en dactylo

    var text = "Mon site";

    for (let i=0; i<text.length; i++){
        console.log(text[i]);

        setTimeout(function() {
            $('#textAppears').append(text[i]);
        }, 250 * i);
    }
    


});