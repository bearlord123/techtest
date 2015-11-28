// JavaScript Document
(function(){
$.getJSON	("http://query.yahooapis.com/v1/public/yql?q=select%20item%20from%20weather.forecast%20where%20location%3D%2222102%22&format=json",function(data){
	var now = data.query.results.channel.item;
	var items = [];
	$.each(now.forecast,function(key,val){
		items.push('<li>'+val.day+'<br/>'+val.high+'&deg'+'/'+val.low+'&deg'+'</li>');
		})
	$("<ul id='day'></ul>").appendTo("#nav");
	$(items.join('')).appendTo("#day");
	var reg=/for\s(.+),\s([A-Z]{2})\s/g;
	var text = now.title;

	var matched = reg.exec(text);
	var city = matched[1];
	var state = matched[2];
	var image = $.parseHTML(now.description);
	$("#main").html(city+', '+state);
	$('<div class="now">'+now.condition.temp+"&deg"+'</div>').appendTo("#main");
	$('<div class="spec"><img src='+now.description.substring(11,48)+'>'+'<br/>'+'<p>'+now.condition.text+'</p></div>').appendTo(".now");
	
});
})(jQuery);