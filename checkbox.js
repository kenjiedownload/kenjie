//<![CDATA[
$(document).ready(function(){
$("#lightsoff").css("height", $(document).height()).hide();
$(".lightSwitcher").click(function(){
$("#lightsoff").toggle();
if ($("#lightsoff").is(":hidden"))
$(this).html("Cinema Off").removeClass("turnedOff");
else
$(this).html("Cinema Mode").addClass("turnedOff");
});
});
//]]>