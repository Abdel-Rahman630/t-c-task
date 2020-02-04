$(document).ready(function () {

    // Toggle Slider
    $(".sidebar .icon").click(function () {

        $(".sidebar").addClass("left")

    })

    $(".sidebar ul li").click( function () {

        $(this).addClass("active").siblings().removeClass("active")
        
    })

    // Slide toggle
    $(".sidebar ul li").click(function () {

        $(this).children("ul").slideToggle(500)
        

    })

    
})