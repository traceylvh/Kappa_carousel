

$(document).ready(function(){
    $.ajax({
      type: "GET",
      url: "/data",
      success: function(data){
        appendDom(data);

        //listen for Next button click
        $('.the-buttons').on('click', '.btn-forward', clickCount);
        $('.the-buttons').on('click', '.btn-forward', updateDisplay);


      }
    });
});


function appendDom(data) {

  // grabData(data);

  createDisplay(data);

  createIndicators(data);

}


//grab the data from the server so I don't have to have (data) passed into the functions

// function grabData(data) {
//
//   console.log(data.kappa[3].name);
//
//   for (var i=0; i < data.kappa.length; i++) {
//
//     function Student(aName, aLocation, aSpirit_animal, aShoutout){
//       data.kappa[i].name = aName;
//       data.kappa[i].location = aLocation;
//       data.kappa[i].spirit_animal = aSpirit_animal;
//       data.kappa[i].shoutout = aShoutout;
//       studentArray.push(data.kappa[i]);
//     }
//   }
// }
// var studentArray = [];
//







//count clicks
var clicks = 0;
function clickCount() {
  clicks++;
  $('.btn-forward').data("currentClick", clicks);
    console.log($('.btn-forward').data("currentClick"));
}


function createDisplay(data) {

  var kappaNumber = 0;

  $('.main').append('<div class="kappanDisplay"></div>');

  var $el = $('.main').children().last();

  $el.append('<h2>' + data.kappa[kappaNumber].name + '</h2>');
  $el.append('<p>' + data.kappa[kappaNumber].location + '</p>');
  $el.append('<p>' + data.kappa[kappaNumber].shoutout + '</p>');


}

//without the (data) in the function call this doesn't work...
// function updateDisplay(data) {
//
//   $('.container').append('<div class="kappanDisplay"></div>');
//
//   var $el = $('.container').children().last();
//
//   // var kappaNumber = $('.btn-forward').data("currentClick");
//
//   $el.append('<h2>' + data.kappa[4].name + '</h2>');
//   $el.append('<p>' + data.kappa[4].location + '</p>');
//   $el.append('<p>' + data.kappa[4].shoutout + '</p>');
//
// }





//for indicators, make a list that uses the array length...
function createIndicators(data) {
  $('.indicators').append('<p class="indicatorList"></p>');

  var $el = $('.indicators').children().last();

  for (var i = 0; i < data.kappa.length; i++) {
    $el.append('<div class="indicator-block"></div>');

  }
}
