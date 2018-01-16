$(function () {
    
    // mobile sticky header
    var cloned = $("#m-header-navigation .cloned");
    var lastScrollTop = 0;
    var delta = 15;

    $(window).scroll(function (event) {
        var st = $(this).scrollTop();
        if (Math.abs(lastScrollTop - st) <= delta)
            return;
        if ((st > lastScrollTop) && (lastScrollTop > 0)) {
            // downscroll code
            cloned.css("top", "-55px");

        } else if ($(this).scrollTop() <= 65) {
            cloned.css("background", "transparent")
        } else {
            // upscroll code
            cloned.css("top", "0");
            cloned.css("background", "rgba(255,255,255,0.9)");
        }
        lastScrollTop = st;
    });


    // side menu toggle
    $('#m-header-navigation .m_navigation .list_btn').on('click', function () {
        // $('#side_menu .side_wrap').toggleClass('opened');
        $('#side_menu .side_wrap').animate({
            left: 0,
        }, 300)
        $('.side_menu_bg').toggleClass('is_active');
    });
    $('#btn_close_menu').on('click', function () {
        $('#side_menu .side_wrap').animate({
            left: -300,
        }, 300)
        $('.side_menu_bg').removeClass('is_active');
    });
    $('.side_menu_bg').click(function () {
        $('#side_menu .side_wrap').animate({
            left: -300,
        }, 300)
        $(this).removeClass('is_active');
    });

    // cart count cloning
    $('#cart_area .cart-trigger .badge').clone().appendTo('.original_nav .nav_part #cart_icon');
    $('#cart_area .cart-trigger .badge').clone().appendTo('.cloned_nav .nav_part #cart_icon');
    $('#cart_area .cart-trigger .badge').clone().appendTo('.m_navigation .m_cart_icon');

    // search input cloning
    $('#search_bar #search').clone().appendTo('.side_lists .search_bar');

    // alternative desktop view main banner 
    $('.main_banner #slider_container .slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        adaptiveHeight: true,
    })

    // header search input toggle
    $('#search_icon').on('click', function () {
        $('#search_bar').slideToggle();
    });
    $('.btn_search_close').on('click', function () {
        $('#search_bar').slideUp();
    })

    // mobile main banner slider
    $('#m_slider_container .m_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        adaptiveHeight: true,
        fade: true,

        //  autoplay: true,
        //  autoplaySpeed: 2000,
    });

    // mobile ver2 main banner slider
    $('#m_slider_container_xs .m_slider_xs').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        adaptiveHeight: true,
        fade: true,
        //  autoplay: true,
        //  autoplaySpeed: 2000,

        //  autoplay: true,
        //  autoplaySpeed: 2000,
    });


    // main page curtain contents parallax effect
    $('.parallax-mirror').css("z-index", "100");


    // main page ** add review list event
    // desktop
    $('.add_list_btn.desktopview').on('click', function () {
        $('#customer_review .wrap .review_lists .list').show(500);
        $(this).hide(300);
    });
    // mobile
    $('.add_list_btn.mobile_view').on('click', function () {
        $('#customer_review .wrap .review_lists .list').eq(1).show(400);
        $('#customer_review .wrap .review_lists .list').eq(2).show(800);
        $(this).hide(300);
    });

    //main page visitor count event
    $('.counter').counterUp({
        delay: 10,
        time: 5000
    });

    // mobile product lineup slider
    $('#lineup .lineup_slider').slick({

    });
    $('#info_slider_sausage').slick({
        dots: true,
        arrows: false,
    });
    $('#info_slider_hamburger').slick({
        dots: true,
        arrows: false,
    });
    // product info tab button (mobile)
    $('#info_slider .tab_btns .tab_btn').on('click', function () {
        var $current = $('#info_slider .tab_btns .tab_btn').index(this) + 1;
        $('#info_slider .tab_btns .tab_btn').removeClass('is_active');
        $(this).addClass('is_active');
        // $('#info_slider .box_info').hide();
        $('#info_slider .box_info').removeClass('is_active');
        $('#info_slider .content' + $current).addClass('is_active');
    });

    // about page slider
    $('.mission_lists.on_sliding').slick({
        dots: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
    })

    // TOP button
    $(window).scroll(function () {
        scrollTop = $(window).scrollTop();
        if (scrollTop > $(window).height()) {
            $('#btn_page_top').addClass('on');
        } else {
            $('#btn_page_top').removeClass('on');
        }
    });
    // event when the click Top button
    $('#btn_page_top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    // display total price at product detail page
    var val = $('.quantity_amount #quantity').attr('value');
    var amount = Number(val);
    var amount = amount + 1;

    $('.quantity_control.plus').on('click',function(){
        event.preventDefault();
        console.log('plus products amount');
        amount;
    })
    $('.quantity_control.minus').on('click',function(){
        event.preventDefault();
        console.log('minus products amount');
        amount--;
    })
});