$(function(event){
  var listItems = ["Go out","Come back" , "Buy food" , "Eat food", 'Eat too much', 'Feel bad for yourself'];

  $(listItems).each(function(key,sentence){
    $('#list').append($("<li>"+sentence+"</li>"))
  })

  $('li').each(function(key, sentence){
    var list = $(listItems);
    if (key % 2 === 0){
      $(this).addClass('even')
    }
  });

  $('#count').html($('list').length)

  // write append loop here


  // write the class loop here
})
