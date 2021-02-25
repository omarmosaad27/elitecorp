$(function(){
    // adjust slider height
    let windowH = $(window).height(),
        upperH = $(".upper-bar").innerHeight(),
        navH =  $(".navbar").innerHeight();
    $(".slider, .carousel-item").height(windowH -(upperH + navH))

    // work shuffle
    $(".our-work ul li").on("click",function(){
        $(this).addClass("selected").siblings().removeClass("selected")
        if($(this).data("class") === 'all' ){
            $(".shuffle-imgs .col-md").css("opacity", 1);
        }else{
            $(".shuffle-imgs .col-md").css("opacity",".4");
            $($(this).data("class")).parent().css("opacity", 1);
        }

    })
    // smooth scroll
    $(" .navbar-nav li a").on("click",function(e){
        $(" .navbar-nav > li").siblings().removeClass("active")
        $(this).addClass("active")
        e.preventDefault()
        $("html ,body").animate({
            scrollTop: $("#" + $(this).data("scroll")).offset().top
        },1000)

    })
    // nice scroll
   $("html").niceScroll({
    cursorcolor:' #ec1c23',
    cursorwidth: "10px",
    cursorborder: "1px solid  #ec1c23",
    zindex: "9999999",
    cursorborderradius: "0"
    });
    // scroll to top
   $(window).scroll(function(){
    if( $(window).scrollTop()>=500){
        $(".top").fadeIn()
    }else{
     $(".top").fadeOut()
    }
    })
    $(".top").on("click",function(){
    $("html").animate({
        scrollTop:0
    },500)
})
})



