//Main Goal
//I want to add events to a daily planner so that I can manage my time effectively
//utility function to select an element based on tag
var qs = function (tag) {
    return document.querySelector(tag);
};

//This is where we first SELECT ALL our elements that we will interact with from HTML:
var hour = qs(".hour");
var row = qs(".row");
var hour = qs(".hour");
var description = qs(".description");
var saveBtn = qs(".saveBtn");





//Criteria
//When I open the planner, then I see the current day is displayed above the calendar
//When I scroll down, I see timeblocks for standard business hours
//When I look at the timeblocks, then each timeblock is color coded to indicate whether it is 
// in the past, present, or future
//When I click into a timeblock, then I can enter an event
//When I click the save button for that time block, then text is saved in local storage
//When I refresh page, the saved events persits




