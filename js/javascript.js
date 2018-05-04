 baguetteBox.run('.gallery');


 var navPosition = $('nav').offset().top;


 //STICKY MENU
 $(window).scroll(function () {
     var navTop = $(window).scrollTop();
     if (navPosition < navTop) {
         $('nav').addClass('fixed');
         $('#mine-empty').css({
             display: 'block'
         });
     } else {
         $('nav').removeClass('fixed');
         $('#mine-empty').css({
             display: 'none'
         });
     }
 });


 $(document).ready(function () {

     var headerHeight = $('.mine-nav').outerHeight();

     $(".nav-link").click(function (e) {

         var linkHref = $(this).attr('href');



         $("html, body").animate({
             scrollTop: $(linkHref).offset().top - headerHeight
         }, 1000);

         e.preventDefault();

     });

 });
 $(window).bind('scroll', function () {
     var currentTop = $(window).scrollTop();
     console.log("current Top " + currentTop);
     var elems = $('.scrollspy');
     var headerHeight = $('.mine-nav').outerHeight();
     elems.each(function (index) {
         var elemTop = $(this).offset().top - headerHeight - 1;
         console.log("elem Top " + elemTop)
         var elemBottom = $(this).offset().top + $(this).height();
         console.log("elem bottom " + elemBottom)
         if (currentTop >= elemTop && currentTop <= elemBottom) {
             var id = $(this).attr('id');
             var navElem = $('a[href="#' + id + '"]');
             navElem.parent().addClass('active').siblings().removeClass('active');
         }
     })
 });
