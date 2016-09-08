   var index=0;
          var time;  
          function show(id){
               if (Number(id)) {
                  index=id;
                  clearInterval(time);
               }else{
               index=index%6+1;
               }
               var picname="images/dd_scroll_"+index+".jpg";
               $("#dd_scroll").attr("src",picname)

               $("#scroll_number>li").attr("class","scroll_number_out");

               $("#scroll_number>li").eq(index-1).addClass("scroll_number_over");
            }

       function start(){
          time=setInterval("show()",1000);
          
       }     
           time=setInterval("show()",1000);
          