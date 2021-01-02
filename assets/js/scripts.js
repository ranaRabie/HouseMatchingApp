rtlCheck = false;

function fixedHeader(){
    try {
        const headerDiv = document.getElementById("header-wrap");
        const navBar = document.getElementById('nav-bar');
        if(window.pageYOffset  >= 35){
            headerDiv.classList.add('header-fixed');
            // navBar.classList.remove('navbar-dark');
            // navBar.classList.add('navbar-light');
        }
        else{
            headerDiv.classList.remove('header-fixed');
            // navBar.classList.remove('navbar-light');
            // navBar.classList.add('navbar-dark');
        }
    }
    catch(err) {
        return false;
    }
}

function initiateAnimation(){
    AOS.init({
        delay: 500, // values from 0 to 3000, with step 50ms
        duration: 1500, // values from 0 to 3000, with step 50ms
        easing: "ease-out-back" // default easing for AOS animations
    });

    if ($(window).width() < 560) {
        AOS.init({
          once: true
        });
    }
}

function mobCloseMainMenu(){
    if(rtlCheck == true){
        $('.navbar-nav').delay(0).animate({right: '-100%'}, 1000);
    }else{
        $('.navbar-nav').delay(0).animate({left: '-100%'}, 1000);
    }
    setTimeout(function(){
        $('.navbar-collapse').fadeOut(500);
    }, 100);
}

function mobOpenMainMenu(){
    setTimeout(function(){
        $('.navbar-collapse').fadeIn(500);
    }, 100);
    if(rtlCheck == true){
        $('.navbar-nav').delay(0).animate({right: '0'}, 1000);
    }else{
        $('.navbar-nav').delay(0).animate({left: '0'}, 1000);
    }
}

function Owls(){
    if($('#screenshots-carousel').hasClass('owl-carousel')){
        $('#screenshots-carousel.owl-carousel').owlCarousel({
            rtl: rtlCheck,
            // stagePadding: 100,
            // items:3.5,
            lazyLoad:true,
            loop:true,
            margin:10,
            dots: false,
            nav: true,
            autoplay:true,
            autoplayTimeout:2500,
            autoplayHoverPause:true,
            responsive:{
                0:{
                    items:1.5
                },
                576:{
                    items:2.5
                },
                768:{
                    items:4.5
                },
                992:{
                    items:3.5
                }
            }
        });
    }
    if($('#sponsers-carousel').hasClass('owl-carousel')){
        $('#sponsers-carousel.owl-carousel').owlCarousel({
            rtl: rtlCheck,
            items:5,
            lazyLoad:true,
            loop:false,
            margin:10,
            dots: false,
            autoplay:true,
            autoplayTimeout:2500,
            autoplayHoverPause:true,
            responsive:{
                0:{
                    items:2
                },
                768:{
                    items:3
                },
                992:{
                    items:5
                }
            }
        });
    }
    if($('#team-carousel').hasClass('owl-carousel')){
        $('#team-carousel.owl-carousel').owlCarousel({
            rtl: rtlCheck,
            items:5,
            lazyLoad:true,
            loop:false,
            margin:10,
            dots: false,
            nav: true,
            autoplay:true,
            autoplayTimeout:2500,
            autoplayHoverPause:true,
            responsive:{
                0:{
                    items:2
                },
                768:{
                    items:3
                },
                992:{
                    items:4
                },
                1200:{
                    items: 5,
                }
            }
        });
    }
}

$(window).on('scroll', function(){
    fixedHeader();
});

$(document).ready(function () {
    if($('body').hasClass('rtl')){
        rtlCheck = true;
    }

    Owls();
    initiateAnimation();


    // $('input[type=file]').on('change', function(){
    //     $(this).closest('.upload-control-wrapper').find('.upload-val').text($(this).val());
    //     if($(this).val() == '' || $(this).val() == undefined || $(this).val() == null){
    //         $(this).closest('.form-group').removeClass('active-control');
    //     }else{
    //         $(this).closest('.form-group').addClass('active-control');
    //     }
    // });

    $('.dropdown-trigger').on('click', function(){
        $('.dropdown-list').not($(this).closest('.dropdown-blk').find('.dropdown-list')).slideUp();
        $(this).closest('.dropdown-blk').find('.dropdown-list').slideToggle();
    });

    $('body').on('click', function(e){
        if($(e.target).closest('.dropdown-blk').length == 0){
            $('.dropdown-list').slideUp();
        }
        if($(e.target).closest('.navbar-nav').length == 0 && $(e.target).closest('#navbar-toggler-lnk').length == 0){
            mobCloseMainMenu();
        }    
    });


    try {
        $('#datepicker').datepicker();
    }
    catch(err) {
        // NO DATE PICKER IN PAGE
    }
});