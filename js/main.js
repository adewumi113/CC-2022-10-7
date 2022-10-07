//Function to check user input for even or odd number

function even_or_odd(number) {
  if (number % 2 === 0){
    return 'Even'  //if number is divisible by 2, return "Even"
  }else{
    return 'Odd'  //else return odd
  }
};
even_or_odd(6);