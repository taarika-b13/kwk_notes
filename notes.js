JAVA SCRIPT NOTES

  TOOL TO CHECK OUR JAVASCRIPT

    console.log("insert variable here")
  note: user never sees this, only a developer's TOOL


VARIABLE: defining an idea or quanitity for the computer for it to remember
    *camelCase - first word is lower case, first letter of second word is captialized

DATA TYPES:

  1. "STRINGS" : must be put into quotes, represents text
        var harryStyles = "perfect human being":

  2. NUMBERS : do NOT use quotes, represents a quantity or amount, can use operators to perform math
        var harryNumber = 1;
    a) <  ---> greater than or less than
        ie 8 > 5
    b) +, -, *, /  ---> addition, subtration, multiplication, divison
    c) == or === (do three) ---> equal to
    d) <= or >=  ---> less than or equal to and greater than or equal to
    e) %  ---> the remainder
        ie 16%3 computer will return 1 because that's the remainder 16/3


  HOW TO USE NUMBER AND STRING VARIABLES

    var dogName = "Zach and Cody";
    var dogLeash = 1;
    var poopBags = 2;
    var waterBottles = 1;

    var numItems = dogLeash + poopBags + waterBottles;

    summary:
      1) broke down our problem into parts, known as variables
      2) defined our variables
      3) used our variables to perform a task

    INTERPOLATION - integrating numerical values into string using variables
    MUST USE BACKTICKS (`)

  console.log(`take ${dogName} on a walk! don't forget to bring ${numItems} items!`)



ARRAYS: a list of strings and/or numbers; represented using square brackets; first item, assigned an index number of 0
  var arraySports = ["soccer", "basketball", "football", "discus", "diving"]

  console.log(arraySports[0]) ---> "soccer"
  console.log(arraySport[4]) ---> "diving"

  arraySports.length ---> .lenth tells computer to print the number of items in an array

array.Sports.push("gymnastics") ---> adds an item to the end of an array

arraySports.pop() ---> removes the last item of an array


  jQuery (ELEMENT ASCESSORS): library of shortcuts we download onto our html page; link goes on second to last line of our body, right above the javascript link

      <script src="https://ajax.googleapis.com/ajax/libs//jquery/2.1.3/jquery.min.js"></script>

EVENT HANDLERS (EVENT LISTENERS): tells the computer to listen to a certain area (often times a button) for a click; on the click, performs a function (action)


define specific area on HTML page using jQuery ($)
  -  var dareButton = $('.darebutton');

    area       listen for     action
  - dareButton.on('click', showDare);

  ie
    dareButton.on('hover', showDare);

ADDING ELEMENTS TO THE WEBPAGE

  1. think of user experience - what do we want the user to see or do?
  2. create an area or <div> in HTML page to add the elements
  3. use jQuery below to tell computer where to look in HTML page
        $('nameofdiv')
  4. create a function (action) to add the items to the HTML <div>
    a) .text ---> only adds the words withough any HTML formatting; CSS does not apply
    b) .append ---> adds HTML elements to the HTML file; must use BACKTICKS

ie
  var truthContainer = $('.truthcontainer')

    function showTruth() {

      truthContainer.text(arrayTruth[2]);
      truthContainer.append(`<h2>${arrayTruth[3]}</h2>`);

    }


CONDITIONALS

  1. define the conditon (what do you want to be true?)
  2. determine the action if the user meets the condtion
  3. determine the action if the user does not meet the condition
  4. conditionals exist in functions

if(condition){
  action if user meets the condition
}


else{
  action if user does not meet the condition
}


if (userNumber > 7) {
  container.append(`<img src = "url"`)
}


else {
  container.append(`<p> random text <p>`)
}
