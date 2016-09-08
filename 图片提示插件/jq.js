;(function(w,d,$){
    $.fn.linkWidthPic=function(){
    	//title文字的获取
    	$(this).hover(function(e){

    		var title=$(this).attr("title")|| '';

    		$(this).attr("temp",title).removeAttr("title");

            
    		$("body").append("<div id='screenshot'><img src='"+$(this).attr('rel')+"' /><br /></div>");
           if ($(this).attr("title")) {
           	$("#screenshot").append("<br/>"+title);
           }else{
           	$("#screenshot").append(title)
           }
    		$("#screenshot").css({
    			"top":(e.pageY+20)+"px",
    			"left":(e.pageX+20)+"px"
    		}).fadeIn("slow");
    	},function(){
    		var title=$(this).attr("temp");
    		$(this).attr("title",title).removeAttr("temp");
    		$("#screenshot").remove();
    	});
    	$(this).mousemove(function(e){
             $("#screenshot").css({
             	"top":(e.pageY+20)+"px",
             	"left":(e.pageX+20)+"px"
             });
    	})
    }
})(window,document,$)