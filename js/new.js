



     




$(document).ready(function () {

     $('#homepage').owlCarousel({

          items:1,
          margin:0,
          autoplay:true,
          loop:true,
          dots:false,
          autoPlaySpeed:1000,
     });

     var mixer = mixitup('.myproducts');
   
     
});

$(document).ready(function () {

     $('#mybrand').owlCarousel({

          items:4,
          margin:0,
          autoplay:true,
          loop:true,
          dots:false,
          autoPlaySpeed:1000,
          responsiveClass:true,
          responsive:{

               0:{

                    items:1,
               },

               350:{

                    items:2,
               },
               768:{

                    items:4,
               },






          }
     });

    
   
     
});

$(document).ready(function() {


     new Glide('.glide').mount({
     
     perView:3,
     type:"carousel",
     autoPlay:true,
     startAt:0,
     
     })
     
     
     
     
     });


     $(document).ready(function () {

          $('#myblog').owlCarousel({
     
               items:3,
               margin:20,
               autoplay:true,
               loop:true,
               dots:false,
               autoPlaySpeed:1000,
               responsiveClass:true,
          responsive:{

               0:{

                    items:1,
               },

               768:{

                    items:2,
               },
               1000:{

                    items:3,
               },






          }
          });
     
          
        
          
     });


     $(document).ready(function () {

          setTimeout(function () {
          
          $('.popupmain').css({
          
               display:'block',
          
          })
          
          
          },3000);
          
               
          });

          $(document).ready(function(){


               $('.close-btn').click(function(){

                    $('.popupmain').css({
                         "display":"none"
                    })
               })



          });

          function myloader() {

               document.querySelector('.preloader').style.display="none";
                    
               };
          
     


     