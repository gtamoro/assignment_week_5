$(document).ready(start);

// valid cities
var nycValues    = ["New York","New York City","NYC"];
var sfValues     = ["San Francisco","SF","Bay Area"];
var laValues     = ["Los Angeles","LA","LAX"];
var austinValues = ["Austin","ATX"];
var sydneyValues = ["Sydney","SYD"];

var city;

function start() {
  $("#submit-btn").click(runCitiPix);
}

function runCitiPix(event) {
  event.preventDefault();  // prevent form submission
  getEntryValue();         // get value entered in user input field
  updateBackground();      // update background with image
  clearEntryInput();       // reset user input field
}

function getEntryValue() {
  var rawEntry = $("#city-type").val();
  city = trimString(rawEntry);  // remove extra spaces
}

// Remove extra spaces
// credit: http://www.w3schools.com/jsref/jsref_trim_string.asp
function trimString(input){
  return input.replace(/^\s+|\s+$/gm,'');
}

function updateBackground() {
  removeBackground();
  // If city exists in any of the valid values arrays
  // Add class to body element (i.e. update background-image)
  if ($.inArray(city, nycValues) !== -1) {
    $("body").addClass("nyc");
  } else if ($.inArray(city, sfValues) !== -1) {
    $("body").addClass("sf");
  } else if ($.inArray(city, laValues) !== -1) {
    $("body").addClass("la");
  } else if ($.inArray(city, austinValues) !== -1) {
    $("body").addClass("austin");
  } else if ($.inArray(city, sydneyValues) !== -1) {
    $("body").addClass("sydney");
  }
}

// Remove any classes added to the body element
// We don't want to add multiple classes to the body
function removeBackground() {
  var currentClass =  $("body").attr("class");
  if (typeof currentClass !== "undefined") {
    $("body").removeClass(currentClass);
  }
}

// Reset user input field
function clearEntryInput() {
  $("#city-type").val("");
}
