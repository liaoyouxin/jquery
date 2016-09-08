;(function(w,d,$){
    $.fn.Zoomer=function(params){
        var defaults={
        	speedView:200,
        	speedRemove:400
        }
        params=$.extend({},defaults,params);

        $(this).hover(function(){
        	$(this).find("img").css("z-index",100);
        	$(this).find("img").stop().animate({
                   width:'200px',
                   height:'200px'
        	},params.speedView);
        },function(){
        	$(this).find("img").css("z-index",100);
        	$(this).find("img").stop().animate({
                   width:'100px',
                   height:'100px'
        	},params.speedView);
        })
    }
})(window,document,$)