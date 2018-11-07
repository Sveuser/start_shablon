
$(window).scroll(function(){
    if ( $(this).scrollTop() > 650 && $("#fixedBTN").hasClass("block-btn-fixed") ){
        $("#fixedBTN").removeClass("block-btn-fixed").addClass("open-btn-fixed");
    } else if($(this).scrollTop() <= 650 && $("#fixedBTN").hasClass("open-btn-fixed")) {
        $("#fixedBTN").removeClass("open-btn-fixed").addClass("block-btn-fixed");
    }
});//scroll

$(document).ready(function() {
    $("a.anchor").click(function() {
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination
        }, 900);
        return false;
    });

    $OpenMenu= $('.wrapper');
	$(".btn_navbar").click(function(e) {
		if ( $OpenMenu.hasClass('active_navbar') ) {
			$OpenMenu.removeClass('active_navbar');
        } else {
			$OpenMenu.removeClass('active_navbar');
			$OpenMenu.addClass('active_navbar');
        }
    });

	$ClosedMenu= $('.wrapper');
	$(".btn_closed_navbar, .list_navbar li a").click(function(e) {
		if ( $ClosedMenu.hasClass('active_navbar') ) {
			$ClosedMenu.removeClass('active_navbar');
        } else {
			$ClosedMenu.removeClass('active_navbar');
			$ClosedMenu.addClass('active_navbar');
        }
    });
});

$(document).ready(function () {
    // clear input
    $('input, textarea').each(function () {
        var placeholder = $(this).attr('placeholder');
        $(this).focus(function () {
            $(this).attr('placeholder', '');
            return false;
        });
        $(this).focusout(function () {
            $(this).attr('placeholder', placeholder);
            return false;
        });
    });

    // start vars
	var intro_slider = $('.intro_slider');
	var list_control = $('.list_control');
	var list_partners = $('.list_partners');
    // end vars

	if(intro_slider !== undefined ) {
		intro_slider.slick({
			dots: false,
			arrows: false,
			fade: true,
			speed: 1000,
			slidesToShow: 1,
			slidesToScroll: 1,
			asNavFor: '.list_control'
		});
	}
	if(list_control !== undefined ) {
		list_control.slick({
			dots: false,
			arrows: false,
			slidesToShow: 3,
			slidesToScroll: 1,
			asNavFor: '.intro_slider',
			centerMode: true,
			focusOnSelect: true,
			responsive: [
				{
					breakpoint: 991,
					settings: {
						slidesToShow: 3,
					}
				},
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 3,
					}
				}
			]
		});
	}
	if(list_partners !== undefined ) {
		list_partners.slick({
			dots: true,
			arrows: false,
			slidesToShow: 4,
			rows: 3,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 991,
					settings: {
						slidesToShow: 3,
						rows: 0
					}
				},
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 2,
						rows: 0
					}
				}
			]
		});
	}


});

$(window).load(function() {
	$(".loader").fadeOut();
	$(".load-inner").delay(100).fadeOut("slow");
});

$(document).ready(function() {
    $('.popup-with-move-anim').magnificPopup({
        type: 'inline',

        fixedContentPos: false,
        fixedBgPos: true,

        overflowY: 'auto',

        closeBtnInside: true,
        preloader: false,

        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-slide-bottom'
    });
});
