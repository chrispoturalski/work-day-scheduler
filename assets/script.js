//Main Goal
//I want to add events to a daily planner so that I can manage my time effectively
//utility function to select an element based on tag
var qs = function (tag) {
    return document.querySelector(tag);
};

//This is where we first SELECT ALL our elements that we will interact with from HTML:
var presentDay = qs("#currentDay")
var hour = qs(".hour")
var row = qs(".row");
var description = qs(".description");
var saveBtn = qs(".saveBtn");
var date = new Date();
//When I open the planner, then I see the current day is displayed above the calendar
//Display the current date at the top of the calendar
$("#currentDay").text(moment().format("MMM D, YYYY"));


//When I look at the timeblocks, then each timeblock is color coded to indicate 
//whether it is  in the past, present, or future
function currentTime() {
    //targets the time-block element from HTML
    $(".time-block").each(function () {
        // returns an the hour within each "id" div from HTML
        var presentTime = parseInt($(this).attr("id").split("-")[1]);
        // pulls the current hour
        var absoluteTime = moment().hour();
        // if hour equals current hour, then will pull CSS element to turn event box red
        if (presentTime === absoluteTime) {
            $(this).addClass("present");
        // if current hour is greater than hour, then will pull CSS element to turn event box gray
        } else if (presentTime < absoluteTime) {
            $(this).addClass("past");
        // if hour is earlier current hour, then will pull CSS element to turn event box green
        } else {
            $(this).addClass("future");
        }
    });
}
currentTime();



//When I click the save button for that time block, then text is saved in local storage
$(".saveBtn").on("click", function() {
    //this pulls the information from the timeblock element from HTML
    var timeBlock = $(this).parent().attr('id');
    //This should pull the information that we put in the description
    var text = $(this).siblings(".description").val();
    localStorage.setItem(timeBlock, text);
})
//When I refresh page, the saved events persits
//This should pull the saved information for once we refresh page
$("#hour-9 .description").val(localStorage.getItem('hour-9'));
$("#hour-10 .description").val(localStorage.getItem('hour-10'));
$("#hour-11 .description").val(localStorage.getItem('hour-11'));
$("#hour-12 .description").val(localStorage.getItem('hour-12'));
$("#hour-13 .description").val(localStorage.getItem('hour-13'));
$("#hour-14 .description").val(localStorage.getItem('hour-14'));
$("#hour-15 .description").val(localStorage.getItem('hour-15'));
$("#hour-16 .description").val(localStorage.getItem('hour-16'));
$("#hour-17 .description").val(localStorage.getItem('hour-17'));
$("#hour-18 .description").val(localStorage.getItem('hour-18'));




//Criteria
//When I scroll down, I see timeblocks for standard business hours - HTML
//When I click into a timeblock, then I can enter an event -HTML

