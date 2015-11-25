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
	$("#main").html(now.title.substring(14,25));
	$('<div class="now">'+now.condition.temp+"&deg"+'</div>').appendTo("#main");
	$('<div class="spec"><img src='+now.description.substring(11,48)+'>'+'<br/>'+'<p>'+now.condition.text+'</p></div>').appendTo(".now");
	
	
});
})(jQuery);