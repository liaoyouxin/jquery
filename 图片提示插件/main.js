;(function(w,d,u,$){
	$.fn.linkWidthPic=function(){
		var x=10;
		var y=20;
		$(this).mouseover(function(e){
			var title=$(this).attr("title")||"&nbsp;";
			$(this).attr("temp",title).removeAttr("title");
			$("body").append("<div id='float'><img src='"+$(this).attr("rel")+"' /></div>");
			$("#float").css({"position":"absolute","top":(e.pageY+y)+'px',
	   								"left":(e.pageX+x)+'px'
	   							}).show("slow");
		
			
		}).mousemove(function(e){
			$("#float").css({"top":(e.pageY+y)+'px',
	   								"left":(e.pageX+x)+'px'
	   						}).show("slow");
	   		
		}).mouseout(function(e){
			var title=$(this).attr("temp");
			$(this).attr("title",title).removeAttr("temp");
			$("#float").remove();
		});
		
	}
})(window,document,undefined,$);
