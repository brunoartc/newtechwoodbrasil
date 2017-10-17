$(document).ready(function(){$('dd.mainlevel').mousemove(function(){$(this).eq(0).addClass("dd_a")
$(this).find('ul').show();});$('dd.mainlevel').mouseleave(function(){$(this).eq(0).removeClass("dd_a")
$(this).find('ul').hide();});});