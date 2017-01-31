function move(target, speed,sametarget) {
    if(sametarget == 'true'){
        $('.list .list-content').slideUp(speed);
        $(target).parent('.list').children('.list-content').slideDown(speed);
    } else {
        $('.list .list-content').slideUp(speed);
    }
}

function modalControl(target,speed) {
    if(target == 'close') {
            $('.modal-container, .modal').fadeOut(speed);
    } else {
            $('.modal-container').fadeIn(speed);
            $('.modal-container ' + target).fadeIn(speed);
    }
}

function moveSlide(slidePosition,slideSpeed){
    var width = $(window).width(),
        move = width * slidePosition * (-1);
    
    $('#first-screen .slider-box').animate({
        'left':move
    }, slideSpeed, function(){
        //
    });
}