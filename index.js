//Adds functionality to the calculator        
//Functions like toggle to clear the Screen
var end = true;

//used to proccess the string sent by  buttons Onclick event
function number(a){
    if(end){
        calc.input.value+=a;
    } else {
        reset();
        calc.input.value+= a;
    }
}

//Evaluates the expression on the screen
function ans(){
    if(calc.input.value !== ""){
        calc.input.value =eval( calc.input.value);
} else {
        calc.input.value = "0";
} 
        end =false; 
}

//reset the screen to an empty string
function reset(){
    calc.input.value="";
    end=true;
}

//evaluates the value of the expression when only using addition
function avg(){
    var a = calc.input.value.toString();
    a=a.split("+");
    calc.input.value=eval(calc.input.value)/a.length;
    end=false;
                    
}