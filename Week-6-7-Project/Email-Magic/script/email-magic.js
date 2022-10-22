//JavaScript File
// Morgage Calculator - Created for Week 07 assignment
const submit = (ev)=>{
  ev.preventDefault();
  //Get the input node values:
  let text, trig;
  
  text = email_text.value;
  trig = trigger.value;
  
  //valid form?
  if (text.trim() == ''){
    document.getElementById('validate').innerHTML = "Type Some Text";
    document.getElementById('validate').style.textShadow = '0px 0px 10px red';
    document.getElementById('email_text').style.boxShadow = '0px 0px 10px red inset';
    document.getElementById("email_text").focus();
  //} else if (trig.trim() == ''){
    //document.getElementById('validate').innerHTML = "Trigger Input";
    //document.getElementById('validate').style.textShadow = '0px 0px 10px red';
    //document.getElementById('trigger').style.boxShadow = '0px 0px 10px red inset';
    //document.getElementById("trigger").focus();
  } else {
    document.getElementById('email_text').style.boxShadow = 'none';
    document.getElementById('trigger').style.boxShadow = 'none';
    document.getElementById('validate').innerHTML = 'I like pressing buttons too!';
    document.getElementById('validate').style.textShadow = '0px 0px 10px green';
  }
};

const clear = (ev)=>{// When mouse clicks on 'clear' button:
  ev.preventDefault();
  //reset all user input using jquery:
  $(':input').val('');
  //clear validate notification
  const validate = document.getElementById("validate");
  while (validate.hasChildNodes()) {
    document.getElementById('validate').innerHTML = "";
    //valid.removeChild(valid.firstChild);
  }
  const trig = document.getElementById("trigger_happy");
  while (trig.hasChildNodes()) {
    document.getElementById('trigger_happy').innerHTML = "";
    //valid.removeChild(valid.firstChild);
  }
  //clear input box shadows:
  document.getElementById('email_text').style.boxShadow = 'none';
  document.getElementById("email_text").focus(); // put cursor inside the textbox
};

// Replace Text Input
const Validate_Trigger = ()=> {
  let trig = document.getElementById('trigger').value;
  // Regular Expression Time!
  const spell = /\/([\S])*/y; //Look for a string after a "/" and end the match at a white space.
  // Note to self, the "/y" is a sticky (strict) search while the "/g" is global.
  //Validate trigger:
  if (spell.test(trig) == true){
    document.getElementById('trigger_happy').style.textShadow = '0px 0px 10px green';
    document.getElementById('trigger_happy').innerHTML = `Your trigger is: ${trig}`; // Output the reorganized string:
  } else {
    document.getElementById('trigger_happy').style.textShadow = '0px 0px 10px red';
    document.getElementById('trigger_happy').innerHTML = "Enter a Trigger, start with a '/' then your trigger word";
    document.getElementById('trigger').focus();
  }
};

const magic_text=()=>{
  let txt = document.getElementById('email_text').value;
  
}


// I'm using at least 3 event listeners: 'DOMContentLoaded' = Listen for Load, 
                                        //'click' = Listen for mouse Click,
                                        //'keyup' = listen for Change after key release.
document.addEventListener('DOMContentLoaded', ()=>{ //Listen for the following events after page loads:
  // Form button
  document.getElementById('submit').addEventListener('click', submit);// Listen for mouse click button
  document.getElementById('clear').addEventListener('click', clear);// Listen for mouse click button
  // Input onkeyup:
  //document.getElementById('trigger').addEventListener('keyup', Email_Magic_Trigger);// update when the user releases a key
});

//testing...
console.log(/\/([\S])*/y.test('abc1')); // false

console.log(/\/([\S])*/y.test('/abc12')); // true

console.log(/\/([\S])*/y.test('abc/123')); // false

console.log(/\/([\S])*/y.test('abc /123')); // false

console.log(/\/([\S])*/y.test('/123 sfd')); // true