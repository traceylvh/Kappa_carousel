var kappaArray = [];
var index = 0;

$(document).ready(function(){
    $.ajax({
      type: "GET",
      url: "/data",
      success: function(data){
        //trying out Michelle's array code
        console.log(data);
      kappaArray = data.kappa;
      appendDom(kappaArray[index]);

        //listen for Next button click
        $('.the-buttons').on('click', '.btn-forward', clickCount);
        $('.the-buttons').on('click', '.btn-forward', createDisplay);
        // $('.the-buttons').on('click', '.indicators', changeBackground);

        $('.the-buttons').on('click', '.btn-back', clickBack);
        $('.the-buttons').on('click', '.btn-back', createDisplay);


      }
    });
});


function appendDom(data) {

  createDisplay(data);

  createIndicators();

}



//count clicks and store on buttons (later: stop storing on buttons)

function clickCount() {
  if (index < kappaArray.length - 1) {
    index++;
    // $('.btn-forward').data("currentClick", index);
  } else {
    index = 0;
    //$('.btn-forward').data("currentClick", index);
  }

}

function clickBack() {
  if (index > 0) {
    index--;
  //  $('.btn-back').data("currentClick", index);
} else {
    index = kappaArray.length - 1;
  //$('.btn-back').data("currentClick", index);
}

}

//add info to DOM
function createDisplay() {

  $('.kappanDisplay').empty();

  $('.main').append('<div class="kappanDisplay"></div>');

  var $el = $('.main').children().last();

  $el.append('<h2>' + kappaArray[index].name + '</h2>');
  $el.append('<p>' + kappaArray[index].location + '</p>');
  $el.append('<p>Spirit Animal: ' + kappaArray[index].spirit_animal + '</p>');
  $el.append('<p class="shoutout">' + kappaArray[index].shoutout + '</p>');

}


//for indicators, make a list that uses the array length...
function createIndicators() {
  $('.indicators').append('<p class="indicatorList"></p>');

  var $el = $('.indicators').children().last();

  for (var i = 0; i < kappaArray.length; i++) {
    $el.append('<div class="spot-off spot-on indicator-block' + i + '"></div>').data(i);

  }

}



// //change the indicator background color
// function changeBackground() {
//         $(.indicators).removeClass('spot-on');
//         // $(this).toggleClass('spot-on');
// }
