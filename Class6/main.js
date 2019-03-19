$(document).ready(function(){
    $('.carousel').carousel({
        interval:   500,
        keyboard:   false,
    });

    $(".carousel-pauser").click(function(){
        $('.carousel').carousel('pause');
    });

    $('.modal-popper').click(function(){
        $('.modal').modal({
            backdrop:'static'
        });
    });
});