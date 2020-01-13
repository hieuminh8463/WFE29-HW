$(document).ready(function() {
    $('#tabww .tab').hide();
    $('#tabww h3:first').addClass('active').next().slideDown('fast');
    $('#tabww h3').click(function() {
        if($(this).next().is(':hidden')) {
            $('#tabww h3').removeClass('active').removeClass('fa-minus').addClass('fa-plus').next().slideUp('fast');
            $(this).toggleClass('active').removeClass('fa-plus').addClass('fa-minus').next().slideDown('fast');        
          }
    });
});