/* eslint-disable no-cond-assign */
'use strict';
let userName=prompt('welcome,please tell us your name');
alert('welcom'+' '+userName);
let a=0; let b=0; let c=0; let d=0; let e=0; let f=0; let g=0;
alert('now lets get to know each other by knowing some information about me please answer with yes or no');
function q1(){
  let drawing=prompt('do you think i like drawing');

  if (drawing.toLowerCase()==='yes')
  {
    alert('yes'+' '+userName+' '+'you got it right');
    a++;
  } else if(drawing.toLowerCase()==='no') {
    alert('sorry you got this one wrong i like drawing');
    
  } else { alert('please answer yes or no ');
    

  }
  return a;
}q1();


function q2 (){
  let mycolor=prompt('do think i like white');
  if(mycolor.toLowerCase()==='no')
  {
    alert('sorry to the white but its not my faviorit');
    b++;
  } else if(mycolor.toLowerCase()==='yes'){
    alert('you got this wrong,i dont like white');
  
  }
  else{alert('please answer yes or no ');
  
    
  
  }
return b;
};
q2 ();


function q3 (){

  let travel=prompt(userName+' '+'do you think i like travelling');
  if(travel.toLowerCase()==='yes')
  {
    alert('yes'+' '+userName+' '+'hope we can travel together');
    d++;
  }
  else if(travel.toLowerCase()==='no')
  {
    alert('no i like travelling'+' '+userName+' '+'hope we can travel together');
    
  }
  else{
    alert('please answer yes or no ');
    
  } return d;
}
q3();


function q4 (){

  let math=prompt('am I good at maths or not');
  if(math.toLowerCase()==='no')
  {
    alert('you got it,oh i should improve my self in math');
    c++;
  }
  else if(math.toLowerCase()==='yes')
  {
    alert('no the answer is no,sorry');
    
  }
  else{ alert('please answer yes or no ');
    
  } return c;
}
q4();

function q5 (){

  let cooking=prompt(userName+' '+'what about cooking .am i good or not');
  
  if(cooking.toLowerCase()==='yes')
  {
    alert('cooking is fun you got this one right');
    g++;
  
  }else if(cooking.toLowerCase()==='no')
  {
    alert('you got this one wrong,i like to cook');
    
  }else
  {
    alert('please answer yes or no ');
    
  }return g;
}
q5();


alert('thanks alot'+' '+userName+' '+'for talking your time to get to know me hope next time i have the chance to know you');




function q6(){

  for (let i = 0; i < 4; i++)
  {let guess=prompt('please guess anumber in my mind from 0 to 10'+' '+userName);
  
  
    if (guess==='7') { alert('correct'+' '+'you got it'+' '+userName);
      e++;
      break;
  
    } else if (guess<=7){ alert('too low try again'+' '+userName);
      
  
    }else{alert('high number try '+' '+userName);
      
  
    }}return e;
}
q6();

alert('correct answer is 7');
function q7(){
  let drinks = ['orange','water','tea','apple','coffe','mango','lemon'];
  
  
  for( let x=0 ; x<6 ;x++)
  { let favDrink=prompt('Now guess my faviourit drink');
  
  
    if (favDrink===drinks[1] || favDrink===drinks[2]|| favDrink===drinks[3] || favDrink===drinks[4] || favDrink===drinks[5] || favDrink===drinks[6] || favDrink===drinks[7] )
    {alert(' you got this one right');
      f++;
      break;
  
    } else {alert('nope!');
      
  
    }}
  
  alert('the drinks that i like is'+' '+drinks);
  
  return f;
}
q7();
console.log(a);
let y =a+b+d+c+e+f+g;
alert('your score is'+' '+y+' '+'out of 7');
