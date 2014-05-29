var divCategory = document.getElementById('divCategory');
var categoryImage = document.createElement('img');
var ss;

window.onload=function(){
	$('#bar').hide();
	$('#divCategory').hide();
};

setTimeout(function() {
	$('#about').hide();
	$('#bar').show();
	$('#divCategory').show();
	window.scrollTo(0,0);
}, 1500);

function setCategory() {
	var arr = eval(JSON.parse(Android.getJson()));
	ss = eval(JSON.parse(Android.getScreenSize()));
	arr.forEach(function(entry) {
		$("#divCategory").prepend( "</div>" );
			if(entry.description != ''){
				$("#divCategory").prepend( "<br/>" + entry.time + " . " +  entry.description + "<a href='read.html?url="+entry.url+"'> read more...</a><hr>" );
			}
			else{
				$("#divCategory").prepend( "<hr>");
			}
			$("#divCategory").prepend( "<img height='32' src='"+ entry.provider_icon +"' /> " + entry.provider_name + " . " + entry.author);
			$("#divCategory").prepend( "<h3>" + entry.title + "<h3/>" );
			$("#divCategory").prepend( "<img width='"+ss.x+"' src='"+ entry.thumbnail +"' />" );
			$("#divCategory").prepend( "<div>" );
	});
}
function setLast() {
	var entry = eval(JSON.parse(Android.getLastJson()));
	if(entry.description != ''){
		$("#divCategory").prepend( "<br/>" + entry.time + " . " +  entry.description + "<a href='read.html?url="+entry.url+"'> read more...</a><hr>" );
	}
	else{
		$("#divCategory").prepend( "<hr>");
	}
	$("#divCategory").prepend( "<img height='32' src='"+ entry.provider_icon +"' /> " + entry.provider_name + " . " + entry.author);
	$("#divCategory").prepend( "<h3>" + entry.title + "<h3/>" );
	$("#divCategory").prepend( "<img width='"+ss.x+"' src='"+ entry.thumbnail +"' />" );
}