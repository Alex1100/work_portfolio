$(document).ready(function(){
  $('.projects').hover(function(){
    $(this).css('border', 'outset 25px white');
  }, function(){
    $(this).css('border', 'solid 1px gold');
  });
});
