'use strict';
let userName=prompt('welcome,please tell us your name');
alert('welcom'+' '+userName);

alert('now lets get to know each other by knowing some information about me please answer with yes or no');
  
let drawing=prompt('do you think i like drawing');
console.log(drawing);
if (drawing.toLowerCase()=='yes')
{
  alert('yes'+' '+userName+' '+'you got it right');
} else{
    alert('sorry you got this one wrong i like drawing');
};


let mycolor=prompt('do think i like white')
if(mycolor.toLowerCase()=='no')
{
  alert('sorry to the white but its not my faviorit');
} else{
    alert('you look you dont like white like me');

};


let travel=prompt(userName+' '+'do you think i like travelling');
if(travel.toLowerCase()=='yes')
{
   alert('yes'+' '+userName+' '+'hope we can travel together')
}
else{
    alert('no i like travelling'+' '+userName+' '+'hope we can travel together')
};




let math=prompt('am I good at maths or not');
if(math.toLowerCase()=='no')
{
  alert('you got it,oh i should improve my self in math');
}else{ alert('no the answer is no,sorry');

}



let cooking=prompt(userName+' '+'what about cooking .am i good or not');

 if(cooking.toLowerCase()=='yes')
{
   alert('cooking is fun you got this one wright');

}else{
    alert('you got this one wrong,i like to cook');
};
alert('thanks alot'+' '+userName+' '+'for talking your time to get to know me hope next time i have the chance to know you');


  