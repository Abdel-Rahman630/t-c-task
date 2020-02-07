$(document).ready(function () {

    /********************************** Fixed Nav *******************************************/
    // Fixed nav
    $(window).scroll(function () {

        if ($(this).scrollTop() > $(".home-header").height()) {

            $("nav").addClass("fixed-nav")

        } else {

            $("nav").removeClass("fixed-nav")

        }

    })

    /********************************* SideBar ************************************/

    // Toggle Slider
    $(".sidebar .icon").click(function () {

        $(".sidebar").removeClass("left")

    })

    $("nav .bar").click(function () {

        $(".sidebar").addClass("left")

    })



    // Class Active
    $(".sidebar ul li").click( function () {

        $(this).addClass("active").siblings().removeClass("active")
        
        
    })

    // Slide toggle
    $(".sidebar ul li").click(function () {

        $(this).children("ul").slideToggle(500),
        $(this).siblings("li").children("ul").hide(500)

    })
    
    /************************ Search Section ******************************** */
    $("nav i.fa-search").click(function () {

        $(".input-search").fadeIn(300)

    })

    $(".input-search .icon2").click(function () {

        $(this).parent(".input-search").fadeOut(300)

    })

    $(".input-search .parent input").focus(function () {

        $(this).attr('placeholder', "")

    })

    $(".input-search .parent input").blur(function () {

        $(this).attr('placeholder', "Search")

    })

    /**************************** Video Section *******************************************/
    $(".owl-carousel .item .img-content span").click(function () {

        $(".video").fadeIn(300)

    })

    $(".video .icon").click(function () {

        $(this).parent(".video").fadeOut(300)

    })

    /***************************** scroll to our-story **********************************/
    
    $(".home-header  a.scroll").click( function (e) {

        e.preventDefult

        $("html, body").animate({

            scrollTop: $( "." + $(this).data('scroll')).offset().top + 1
        
        }, 1000)

    })
})
