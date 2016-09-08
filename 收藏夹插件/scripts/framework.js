;(function(w,d,$){
   $.fn.showClass=function(idName){
   	 $("#"+idName).find("li").click(function(){
   	 	$(this).attr("class","current")
   	 	        .siblings().attr("class","");

   	 	  var text=$(this).text().toLowerCase().replace(" ","-");
   	 	  var uls=$(this).parent().next().find("li");      
   	 	if (text=='all') {
   	 		uls.fadeIn("slow");
   	 	}else{
   	 		for(var i=0;i<uls.length;i++){
   	 			if ($(uls[i]).hasClass(text)) {    //转为dom对象再用jquery方法时必须转为jquery对象$(uls[i])
   	 				$(uls[i]).fadeIn("slow")
   	 			}else{
   	 				$(uls[i]).fadeOut("slow")
   	 			}  
   	        }
   	        }        
   	 })
   }

})(window,document,$)