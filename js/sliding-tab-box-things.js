$('.slide a').click(function () {
  // Scroll the tab's title back into view
  var active = document.getElementsByClassName("slide active")[0];
  if (active) {
    active.scrollTop = 0;
  }
  
  $('.slide.active').removeClass('active');
  $(this).closest('.slide').addClass('active');
  
  // Init Unity animations
  try {
    var btnNum = Number($('.slide.active').contents("span").text());
    console.log("button #" + btnNum + " was pressed");
    gameInstance.SendMessage("Main Camera", "ChangeState", btnNum);
  } catch (error) {
    console.log(error);
  }
  
  return false;
});