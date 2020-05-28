$( document ).ready(function() {


// $("#catering-overlay").hide();
$(".catering-overlay-btn").click(function(){
    $("#catering-overlay").toggle();
}); 
$("#catering-overlay-close").click(function(){
    $("#catering-overlay").toggle();
});
// $("#job-overlay").hide();
$(".job-overlay-btn").click(function(){
    $("#job-overlay").toggle();
});
$("#job-overlay-close").click(function(){
    $("#job-overlay").toggle();
});
//     $("#overlay").hide();
//     $(".food-overlay").click(function(){
//         $("#food").show();
//         $("#drinks").hide();
//         $("#party").hide();
//         $("#overlay").show();
//     }); 
//     $(".drinks-overlay").click(function(){
//         $("#food").hide();
//         $("#drinks").show();
//         $("#party").hide();
//         $("#overlay").show();
//     }); 
//     $(".party-overlay").click(function(){
//         $("#food").hide();
//         $("#drinks").hide();
//         $("#party").show();
//         $("#overlay").show();
//     }); 
//     $("#overlay-close").click(function(){
//         $("#overlay").hide();
//     });

});