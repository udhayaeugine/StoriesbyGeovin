$(function() {
    $('.hamburger-menu').on('click', function() {
        $('.toggle').toggleClass('open');
        $('.nav-list').toggleClass('open');
    });
    AOS.init({
        easing: 'ease',
        duration: 1000,

    });
});

/* For Portfolio filter logic */
$(document).ready(function(){
    let $btns = $('.project-area .button-group button');
    $btns.click(function(e){
        $('.project-area .button-group button').removeClass('active');
        e.target.classList.add('active');
        
        let selector = $(e.target).attr('data-filter');
        $('.project-area .grid').isotope({
            filter : selector
        });
        return false;
    });

    $('.project-area .button-group #btn1').trigger('click');

    $('.project-area .grid .test-popup-link').magnificPopup({
        type: 'image',
        gallery:{enabled:true}
        // other options
      });
});