// canclator

var elForm = document.querySelector(".form");
var elInput = document.querySelector(".input");
var elCanc = document.querySelector(".canculator");

elForm.addEventListener('submit', function(evt){
  evt.preventDefault()

  var userNumber =elInput.value.trim().split(' ');
  result = 0;

  for(var num of userNumber){
    result = result + Number(num);
  }

  elCanc.textContent = result;
})

// How is edit

var elFormTwo = document.querySelector('.form__two');
var elInputTow = document.querySelector('.input__two');
var elEdit = document.querySelector('.edit')

elFormTwo.addEventListener('submit', function(evt){
  evt.preventDefault();

  var userText = elInputTow.value.trim().split(' ');

  var editText = userText[0];

  for(var edit of userText){
    if(editText < edit){
      editText = edit;
    }
  }
  elEdit.textContent = editText;
})