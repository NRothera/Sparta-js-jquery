$(function(event){
  console.log('Dom is ready')

  //This will find elements with the id of list, and add this new list item to it. Awesome!!
  $('#list').append($("<li>Another new item</li>"));

  var cars = ["BMW", "Mercedes", "Audi"]


  //similar to ruby, this does something for each element in the object. Index is the key, car is the value. Remember javascript turns these things into objects so need key and value
  $(cars).each(function(index,car){
    console.log(index,car)
  })

  //this to change html, instead of innerHTML
  $("#count").html('5');
  //this changes css styling
  $('#count').css('background-color', 'blue');
  $('#count').css('color', 'red');
  $('div').css('background-color', 'grey')


  //This will loop through all li elements and give them a class
  $('li').addClass('done');
















});
