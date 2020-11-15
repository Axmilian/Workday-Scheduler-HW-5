//Display Current Time----------------------
var day = moment().format("dddd MMMM Do, YYYY");
$("#currentDay").text(day);
var now = moment().format('LT');
$("#currentTime").text(now)
//var for my color time function------------
var colorTime = moment().hour();
//colorTime function changing the color acording to the time------------
$(".description").each(function colorCode() {

    var milTime = $(this).attr("id");

    if (colorTime == milTime) {
        $(this).addClass("present");
    }else if (colorTime > milTime) {
        $(this).removeClass("present");
        $(this).addClass("past");
    }else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
    }
});
//localStorage click function----------------------------------------------
var saveEl = $("#saveBtn")
$("#saveBtn").innerHTML = localStorage.getItem(".description")

$(saveEl).on("click", function saveBtn() {
    localStorage.setItem(JSON.stringify(".description", "#saveBtn"))
})