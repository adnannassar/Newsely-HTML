$(function () {
    // aos animation initialisation
    AOS.init({
        duration: 1000,
        once: true
    });

    // scroll header script here
    window.onscroll = function () {
        // scrollHeader();
    };
    // Get the header
    var header = $(".navbar-bottom");
    var body = $("body");

    function scrollHeader() {
        // adding sticky class
        if (window.pageYOffset > 300) {
            $(header).addClass("sticky");
        } else {
            // removing sticky class
            $(header).removeClass("sticky");
        }
    }

    // navbar toggler script
    $(".navbar-toggler").on("click", function () {
        $(".collapse").toggleClass("show");
        $("body").toggleClass("layer-open");
        // $(header).toggleClass("sticky-not");
        $(".navbar-close").show();
    });
    $(".navbar-close").on("click", function () {
        $(".collapse").toggleClass("show");
        $(".navbar-close").hide();
        $("body").toggleClass("layer-open");
        // $(header).toggleClass("sticky-not");
        $(".dark-overlay").click(function () {
            $(".collapse").removeClass("show");
            $("body").removeClass("layer-open");
        });
    });

    // $(".navbar-bottom  .navbar-nav a").on("click", function() {
    //   $(".navbar-bottom  .navbar-nav")
    //     .find("li.active")
    //     .removeClass("active");
    //   $(this)
    //     .parent("li")
    //     .addClass("active");
    // });

    $("html").easeScroll({
        frameRate: 60,
        animationTime: 1000,
        stepSize: 40,
        pulseAlgorithm: 1,
        pulseScale: 8,
        pulseNormalize: 1,
        accelerationDelta: 100,
        accelerationMax: 1,
        keyboardSupport: true,
        arrowScroll: 50,
        touchpadSupport: true,
        fixedBackground: true
    });

    $(function () {

        blankImagesArray = [
            "assets/images/mine/Newsely-images/administration.jpg",
            "assets/images/mine/Newsely-images/archive-gliwice.jpg",
            "assets/images/mine/Newsely-images/black-and-white.jpg",
            "assets/images/mine/Newsely-images/img1.jpg",
            "assets/images/mine/Newsely-images/img2.jpg",
            "assets/images/mine/Newsely-images/img3.jpg",
            "assets/images/mine/Newsely-images/img4.jpg",
            "assets/images/mine/Newsely-images/img5.png",
            "assets/images/mine/Newsely-images/img6.jpg",

        ];
        const img = $("img");

        for (let i = 0 ;  i < img.length; i++) {
            if ( $(img[i]).attr('src').toString().length === 0 ||
                ($(img[i]).attr('src').toString() === 'alt="thumb"')){
                $(img[i]).attr('src', blankImagesArray[Math.floor(Math.random() * blankImagesArray.length)]);
            }
            $(img[i]).attr('width', "100%");
        }

    });
    $('.simple-marquee-container').SimpleMarquee();
    $(".marquee-1").trigger('mouseenter');
    $(".marquee-1").trigger('mouseleave');
});







