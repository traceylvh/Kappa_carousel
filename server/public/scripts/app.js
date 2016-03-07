var kappaArray = [];
var index = 0;
var elementArray = [];

$(document).ready(function(){
    $.ajax({
      type: "GET",
      url: "/data",
      success: function(data){
        //trying out Michelle's array code
        console.log(data);
      kappaArray = data.kappa;
      appendDom(kappaArray[index]);
      createIndicators(kappaArray);
      changeBackground();

        //listen for Next button click
        $('.btn-forward').on('click', clickCount);
        $('.btn-forward').on('click', createDisplay);
        $('.btn-forward').on('click', changeBackground);

        $('.the-buttons').on('click', '.btn-back', clickBack);
        $('.the-buttons').on('click', '.btn-back', createDisplay);


      }
    });
});


function appendDom() {

  createDisplay();


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
  for (var i = 0; i < kappaArray.length; i++) {
    var $el = $('.indicators').children().last();
    $el.append('<div class="spot-off"></div>');
    var $el = $el.children().last();
    elementArray.push($el);
  }
}

// //scott's code
// function createIndexNodes(array){
//   for(var i = 0; i < array.length; i++){
//     $('.index-container').append("<div class='index-point'></div>");
//     var $el = $(".index-container").children().last();
//     $el.data("index", i);
//     console.log($el.data());
//     elementArray.push($el);
//   }
// }

// //change the indicator background color
function changeBackground() {
  console.log("Totally works : ", elementArray);

        for(var i = 0; i < elementArray.length; i++) {
          var $el = elementArray[i];
          if(i == index) {
            $el.addClass('spot-on');
          } else {
            $el.removeClass('spot-on');
          }
        }
}


// //scott's codefunction updateHighlight(){
// function updateHighlight(){
//   for(var i = 0; i < elementArray.length; i++){
//     var $el = elementArray[i];
//     if(i == globalIndex){
//       $el.addClass("index-hightlight");
//     } else {
//       $el.removeClass("index-hightlight");
//     }
//   }
// }
