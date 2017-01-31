$(function() {
   
    var speed = 300
    var sametarget = 'true';
    
    $('.list-title').click(function() {
        var target = $(this);
        
        if(sametarget == 'true'){
            move(target, speed,sametarget);
            sametarget = 'false';
        }
        else {
            move(target, speed,sametarget);
            sametarget = 'true';
        }
        
                
        
    });
    
    $('[data-modal]').click(function(){
        var target = $(this).attr('data-modal');
        modalControl(target,speed);
        
    })
    
    var visibleSlide =0,
        slideSpeed = 900,
        width = $(window).width(),
        slideCol = $('div.slide').length;
    
    $('.nav-arrow[data-direction="left"]').click(function() {
        visibleSlide -=1
        if (visibleSlide < 0) {
            visibleSlide = slideCol - 1 ;
        }
        moveSlide(visibleSlide,slideSpeed);   
    })
    
    $('.nav-arrow[data-direction="right"]').click(function() {
        visibleSlide += 1;
        if (visibleSlide == slideCol) {
            visibleSlide = 0;
        }
        moveSlide(visibleSlide, speed);
    });
    
    $('[data-target]').click(function() {
        var target = $(this).attr('data-target');
        $('.box-container').removeClass('active');
        $(this).addClass('active');
        
        $('.navigation a').removeClass('border-button');
        $(this).addClass('border-button');
        
        $('.box-container').fadeOut(100);
        setTimeout(function() {
             $('.box-container').removeClass('active');
            
        },300);
        $('.box-container' + target).fadeIn(100);
        $('.box-container' + target).addClass('active');
        
    })
    
    
});