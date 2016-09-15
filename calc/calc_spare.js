


 function attach(value){
             document.calci.screen.value+=value;


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



 
 function stack() {
  this.data = [];
  this.top = 0;
  this.push = push;
  this.pop = pop;
  this.peek = peek;
  this.length = length;
}
 
function push(val) {
  this.data[this.top++] = val;
}
 
function pop() {
  return this.data[--this.top];
}
 
function peek() {
  return this.data[this.top-1];
}
 
function length() {
  return this.top;
}



//problem here



var calc=document.getElementsByName("calci");

var infix= calc.getElementsbyId("scr").value;

//var postfix=" 3 4 2 * 1 5 - 2 3 ^ ^ / +"
//var infix=document.calci.screen.value;

infix = infix.replace(/\s+/g, '');


var s=new stack();

var ops="^*/+-";

var precedence={"^":4,"*":3,"/":3,"+":2,"-":2};

var associativity = {"^":"Right", "*":"Left", "/":"Left", "+":"Left", "-":"Left"};


var token;
var postfix="";


var o1,o2;


for (var i=0;i<infix.length;i++){

      token=infix[i];

      if(token>= "0" && token <= "9"){

      	postfix += token + " ";
      }


      else if (ops.indexOf(token)!= -1){

         o1=token;
         o2=s.peek();


         while( ((ops.indexOf(o2))!=-1) && (      (associativity[o1] == "Left" && (precedence[o1] <= precedence[o2]) ) ||  ((associativity[o1] == "Right") && (precedence[o1] < precedence[o2])) )){
            
            postfix += o2+" ";
            s.pop();
            o2=s.peek();


         }

         s.push(o1);





      }

      else if(token=="("){

      	s.push(token);
      }

      else if (token==")"){



      	while(s.peek()!="("){

      		postfix += s.pop()+" ";
      	}

      	s.pop();

      }


}


while(s.length() >0){

	postfix=postfix+s.pop()+" ";
}

alert(postfix);






function solve_post() {
 
    this.solvepostfix_exp = function(postfix_exp) {


        var resultStack = [];
        

        postfix_exp = postfix_exp.split(" ");
       

        for(var i = 0; i < postfix_exp.length; i++) {
               console.log(postfix_exp[i]);

            if(postfix_exp[i].isNumeric) {
                resultStack.push(postfix_exp[i]);
            } else {
                var a = resultStack.pop();
                var b = resultStack.pop();
                if(postfix_exp[i] === "+") {
                    resultStack.push(parseInt(a) + parseInt(b));
                } else if(postfix_exp[i] === "-") {
                    resultStack.push(parseInt(b) - parseInt(a));
                } else if(postfix_exp[i] === "*") {
                    resultStack.push(parseInt(a) * parseInt(b));
                } else if(postfix_exp[i] === "/") {
                    resultStack.push(parseInt(b) / parseInt(a));
                } 
            }
        }
        if(resultStack.length > 1) {
            return "error";
        } else {
            return resultStack.pop();
        }
    }
 
}


var output=new solve_post().solvepostfix_exp(postfix);
var final_res= postfix;
//document.write(final_res);


 function result(){


          try{
          	document.calci.screen.value=final_res;
          }
      

             catch(err){

             	document.calci.screen.value="error";
             }

      }