" use strict";
$(() => {
    $(".guest-details").hide();
    // $(".container").attr($(e.target).attr("id"), reservation)

    let currentTable = null;
    $(".available").click((e) => {
        $("input").val("")
        $(".hideForm").toggle()
        $(".number").html((`Table Number: ${$(e.target).attr("id")}`))
    });
    $(".close").click((e) => {
        $(".hideForm").toggle()
    });
    $(".save").click((e) => {
        $(".hideForm").toggle();
        $("body").on("click", ".save", (e) => { currentTable.addClass("reserved")
        .removeClass("available")
        .data("guest-name", $("input").eq(0).val())
        .data("guest-phone", $("input").eq(1).val())
        .data("guest-size", $("input").eq(2).val())
       
        }) 
    })
    $(".available").click((e) => {
        currentTable = $(e.target)                    
    });
    $("body").on("mouseenter mouseleave", ".reserved", (e) => {
        $(e.target).css("cursor", "not-allowed")
        $(".guest-details").fadeToggle(1000)
        $(".guest-name").text(`Name: ${$(e.target).data("guest-name")}`)
        $(".guest-phone").text(`Phone Number: ${$(e.target).data("guest-phone")}`)
        $(".guest-size").text(`Party Size: ${$(e.target).data("guest-size")}`)
        })
    });