//todo: make date and time appear at top of page

// design blocks from 9 to 5 using bootstrap

//use jquery to make them change coloer based on time. grey for past, red for present green for future

//allow user input on click

//the functions below show how to make it editable on click. reference this for how to make that happen when you're there


var input = document.getElementById("inputt");

// var eventt = document.getElementsById("#event");

var now = moment().format("hA");
var nine = moment('9:00 am', 'hh:mm A').format('h:mm A');
var ten = moment('10:00 am', 'hh:mm A').format('h:mm A');
var eleven = moment('11:00 am', 'hh:mm A').format('h:mm A');
var twelve = moment('12:00 pm', 'hh:mm A').format('h:mm A');
var one = moment('1:00 pm', 'hh:mm A').format('h:mm A');
var two = moment('2:00 pm', 'hh:mm A').format('h:mm A');
var three = moment('3:00 pm', 'hh:mm A').format('h:mm A');
var four = moment('4:00 pm', 'hh:mm A').format('h:mm A');
var five = moment('5:00 pm', 'hh:mm A').format('h:mm A');
var six = moment('6:00 pm', 'hh:mm A').format('h:mm A');
var nutt = document.getElementById("event");

var pp = document.getElementsByTagName("p");



$(".nine").text(nine);
$(".ten").text(ten);
$(".eleven").text(eleven);
$(".twelve").text(twelve);
$(".one").text(one);
$(".two").text(two);
$(".three").text(three);
$(".four").text(four);
$(".five").text(five);
$(".six").text(six);

$("p").click(function () {
  var getClass = this.className;
  console.log(this.textContent);

  
  if(this.textContent <= now){
    console.log("yes");
  }
  if(this.textContent >= now){
    console.log("no");
  }
  
  
});
function butt(){

if(two <= now){
$(nutt)
.removeClass("present")
.addClass("past");
console.log( now);
}


};

$(input).keypress((e) => {
  if (e.which === 13) {
  const userInput = input.value;
  var som = document.getElementsByClassName("new");
  var baby = document.createElement("li");
  baby.textContent = userInput;
  const parent = $(som).parent();
  parent.append(baby);
  butt();
  // listItem = $("<li>")
  // .addClass("new")
  // .text(userInput);
  // parent.appendChild(listItem);

  //set input.value to li element, add new input
  }
});











// var saveTasks = function () {
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//   };
  
  
//   $(".list-group").on("blur", "textarea", function () {
//     var text = $(this)
//       .val()
//       .trim();
  
//     var status = $(this)
//       .closest(".list-group")
//       .attr("id")
//       .replace("list-", "");
//     var index = $(this)
//       .closest(".list-group-item")
//       .index();
//     tasks[status][index].text = text;//status returns ARRAY. INDEX returns the object at the given index of the array.text returns the text property of the object at the index
//     saveTasks();
//     //recreate p element
//     var taskP = $("<p>")
//       .addClass("m-1")
//       .text(text);
  
//     //replace textarea with p element
//     $(this).replaceWith(taskP);
//   });
//   $(".list-group").on("click", "span", function(){
//     //get the date written
//   var date = $(this)
//   .text()
//   .trim();
//   //create new input el
//   var dateInput = $("input")
//   .attr("type", "text")
//   .addClass("form-control")
//   .val(date);
  
//   //swaps els
//   $(this).replaceWith(dateInput);
  
//   //automatically focus on new element
//   dateInput.trigger("focus");
  
//   });
  
//   $(".list-group").on("blur", "input[type='text']", function(){
//   var date =$(this)
//   .val()
//   .trim();
  
//   var status = $(this)
//   .closest(".list-group")
//   .attr("id")
//   .replace("list-", "");
  
//   var index = $(this)
//   .closest(".list-group-item")
//   .index();
  
//   tasks[status][index].date = date;
//   saveTasks();
  
//   var taskSpan = $("<span>")
//   .addClass("badge badge-primary badge-pill")
//   .text(date);
  
  
//   $(this).replaceWith(taskSpan);
  
//   });