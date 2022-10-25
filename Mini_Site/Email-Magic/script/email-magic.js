//JavaScript File
// Magic Email Macro Maker

//Saved Macro Triggers:
let macros = [];

const render=(macros)=>{
  const listElement = document.querySelector('#myList');
  listElement.innerHTML = "";
  macros.forEach(macro => {
    listElement.innerHTML += `
    <dt>Trigger: ${macro.trigger}</dt>
    <br>
      <dd>${macro.email_text}</dd>
      <br>
      <dd>RegEx: ${macro.regedit}</dd>
      `;
      //<dd>RegEx: ${macro.regedit}</dd>`;
  });
};

function newMacro() {
  const newMacro = document.getElementById("trigger").value;
  const newText = document.getElementById("email_text").value;

  let pattern = new RegExp(newMacro, 'g');
  
  macros.push({
    trigger: newMacro,
    email_text: newText,
    regedit: pattern,
  });
  render(macros);
}

const submit = ()=>{
  //ev.preventDefault();
  //Get the input node values:
  let text, trig;
  
  text = email_text.value;
  trig = trigger.value;

  // Regular Expression Time!
  const spell = /\/([\S])*/y; //Look for a string after a "/" and end the match at a white space.
  // Note to self, the "/y" is a sticky (strict) search while the "/g" is global.
  //Validate trigger:
  
  //valid form?
  if (text.trim() == ''){
    document.getElementById('validate').innerHTML = "Type Some Text";
    document.getElementById('validate').style.textShadow = '0px 0px 10px red';
    document.getElementById('email_text').style.boxShadow = '0px 0px 10px red inset';
    document.getElementById("email_text").focus();
  } else if (spell.test(trig) == false){
    //document.getElementById('trigger_happy').style.textShadow = '0px 0px 10px red';
    document.getElementById('trigger').innerHTML = "Invalid Entry";
    document.getElementById('trigger').style.boxShadow = '0px 0px 10px red inset';
    document.getElementById("trigger").focus();
  } else {
    document.getElementById('email_text').style.boxShadow = 'none';
    document.getElementById('trigger').style.boxShadow = 'none';
    document.getElementById('trigger_happy').style.textShadow = 'none';
    document.getElementById('validate').innerHTML = 'Macro is valid and saved';
    document.getElementById('validate').style.textShadow = '0px 0px 10px green';
    console.log(email_text.value);
    newMacro();
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

const magic_text=()=>{
  //ev.preventDefault();
  let pattern = macros.trigger;
  let txt = document.querySelector('textarea').value;
  //console.log(pattern.exec(txt));
  let magic = txt.replace(pattern.lastIndex, macros.email_text);

  //console.log(pattern)
  //console.log(pattern.test('abc1')); // false

  //console.log(pattern.test('/asd')); // true

  if (pattern.test(txt) == true) {
    document.querySelector('textarea').innerHTML = magic;
  }  
};


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
//console.log(/\/([\S])*/y.test('abc1')); // false
//
//console.log(/\/([\S])*/y.test('/abc12')); // true
//
//console.log(/\/([\S])*/y.test('abc/123')); // false
//
//console.log(/\/([\S])*/y.test('abc /123')); // false
//
//console.log(/\/([\S])*/y.test('/123 sfd')); // true