" use strict";
$(() => {
    $(".available").click((e) => {
        $(".hideForm").toggle();
    });
    $(".close").click((e) => {
        $(".hideForm").toggle()        
    });      
    $(".save").click((e) => {
        $(".hideForm").toggle();
    });
    $(".table").click((e) => {
        $(e.target).addClass("reserved").removeClass("available");
         
    });
    $(".table").click((e) => {
        if($(".close").on(click())) {
            $(e.target).addClass("available").removeClass("reserved");;
        } else if ($(".save").on(click())){
        $(e.target).addClass("reserved").removeClass("available");
        } 
          
    });
    
});












// $(() => {

//     $("body").on("click", "button", (e) => {
//         $("section p").text($("input").val());
//     });

//     $("body").on("mouseenter", "section p", (e) => {
//            console.log(e.target);
//         $(e.target)
//             .css("color", "orange")
//             .fadeTo(2000, 0.25);
//         $("body").on("mouseleave", "section p", (e) => {
//             $(e.target)
//                 .fadeTo(2000, 1, function () {
//                     $(this).css("color", "black");
//                 });


//         });
//     });
//     $(".hidden").hide();
//     $("body").on("mouseenter", ".toggle", () => {
//         $(".hidden").toggle();
//     });
//     $("body").on("mouseleave", ".toggle", () => {
//         $(".hidden").toggle();
//     });

// });