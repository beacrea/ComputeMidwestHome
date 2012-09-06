/* Author:

*/

$('#about h1').fitText(1, {minFontSize:20});
$('#about p') .fitText(2, {minFontSize:14});

$aboutBg = $('#about .bg');
$aboutBgParent = $aboutBg.parent();

function scaleBg(){
  var pW = $aboutBgParent.outerWidth()
    , w  = $aboutBg.height()
  ;//var

  $aboutBg.width(pW);

  var pH = $aboutBgParent.outerHeight()
    , h  = $aboutBg.height()
  ;//var

  pH > h && $aboutBg.height(pH);
}
scaleBg();
$(window).resize(scaleBg);