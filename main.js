function add(){
  var firstNumber = document.querySelector('.input1').value;
  var secondNumber = document.querySelector('.input2').value;
  var sum = Number(firstNumber) + Number(secondNumber);
  console.log(sum);
}

document.querySelector('button').onclick=add;


// onclick add();
