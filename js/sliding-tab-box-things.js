$('.slide a').click(function () {
  $('.slide.active').removeClass('active');
  $(this).closest('.slide').addClass('active');
  
  // find the button id
//  console.log("button #" + $(this).contents("span").text());
  var btnNum = Number($('.slide.active').contents("span").text());
  console.log("button #" + btnNum + " was pressed");
  gameInstance.SendMessage("Main Camera", "ChangeState", btnNum);
  
  return false;
});