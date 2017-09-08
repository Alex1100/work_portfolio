$(document).ready(function(){
  $(body).style.backgroundImage = "url('../../under_construction.jpg')"
  $('.projects').hover(function(){
    $(this).css('border', 'outset 25px white');
  }, function(){
    $(this).css('border', 'solid 1px gold');
  });
});
