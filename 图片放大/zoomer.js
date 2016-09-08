;(function(w,d,$){
    $.fn.Zoomer=function(params){
        var defaults={
        	speedView:200,
        	speedRemove:400,
            altText:true,
            speedText:200
        }
        params=$.extend({},defaults,params);

        $(this).hover(function(){
        	$(this).find("img").css("z-index",100);
        	$(this).find("img").stop().animate({
                   width:'200px',
                   height:'200px',
                   left:'-50%',
                   top:'-50%'
        	},params.speedView);

            if (params.altText) {
                var altText=$(this).find("img").attr("alt");
                $(this).prepend("<span class='title'>"+altText+"</span>");
                $(".title").css("z-index",101).animate({
                     marginLeft:'-60px',
                     marginTop:'100px',

                })
            }
        },function(){
        	  $(this).find("img").css("z-index",10);
        	$(this).find("img").stop().animate({
                   width:'100px',
                   height:'100px',
                   left:'0px',
                  top:'0px',

        	},params.speedRemove);
            $(this).find(".title").remove();
        })
         
                
    }
})(window,document,$)