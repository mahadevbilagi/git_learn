
          function attach(value){
             document.calci.screen.value+=value;


          }

             function result(){


          try{
          	document.calci.screen.value=eval(document.calci.screen.value);
          }
      

             catch(err){

             	document.calci.screen.value="error";
             }

      }

          function reset(){

          	document.getElementbyId("scr").value="";
          }

       function root(){

       	        var num= eval(document.calci.screen.value);
                   var res=Math.sqrt(num);
                    document.calci.screen.value=res;
       }


       function inverse(){

         var num=eval(document.calci.screen.value);
         var res=1/num;
          document.calci.screen.value=res;
           }

