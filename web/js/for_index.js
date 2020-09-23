/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


console.log('hello bangladesh');
//alert('hi dear');
//var name = prompt('what is your name ');
//document.getElementById("name").innerHTML = name;

/* a function returned your name */
function return_name(){
    var name = prompt('what is your name :');
    document.write('hello'+" " +name);
}
//return_name();

/* enter the value outside of function then return the value function */
function return_value(name){
    document.write("hello"+" "+name);
}
//var input_name = prompt('Enter your name :');
//return_value(input_name);

// for loop 
for (num=0;num<=100;num++){
    //console.log(num);
}

//String methods 
var color="green";
console.log(color.length);
console.log(color.indexOf("n"));
console.log(color.slice(1,5));
console.log(color.split(""));

//array methods
var colors=['red','green','pink','blue','white'];
console.log(colors.length);
console.log(colors.push('indigo'),colors);
console.log(colors.pop(),colors);
console.log(colors.shift('indigo'),colors);
console.log(colors.unshift('indigo'),colors);
var car =['lambarihni','pajarao','toyta'];
console.log(colors.concat(car));
console.log(colors.concat(car).sort());//sort array 
var number = [10,2,1,56,2,3,5,6];
console.log(number.sort(function(a,b){ return a-b}));//sortin ascending order
console.log(number.sort(function(a,b){ return b-a}));// sorting  by desecding order

//pusing in empty array 
var emty=new Array();
for (var i=0;i<10;i++){
    emty.push(i);
}
console.log(emty);

//objects 
var student={first:"zafrul hasan",last:"khan",age:20
   ,student_details: function(){ return this.first+" "+this.last+" "+this.age} 
};
console.log(student.first);
student.first='nasim';
console.log(student.student_details());


//if else statements
//var value = prompt('enter value:');
var value=17;
if(value>=20 && value<=40){
    console.log('yest it is taret value');
    
}
else{
    console.log('sorry');
}

//switch case

//var sw_value= prompt('enter switch value ');
switch(1){
    case 0: text="a";
        break;
    case 1 : text="b";
        break;
        case 3 : text="c";
        break;
    default:text="x";
        
        
}
console.log(text);