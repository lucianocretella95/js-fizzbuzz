for (let number = 1; number <= 100; number++) {
  const li = document.querySelector("li");
  const element = `<li class="box box--${number}">${number}</li>`;
  li.innerHTML += element;
  if (number % 3 == 0 && number % 5 == 0) {
    console.log(number, "FizzBuzz");
  } else if (number % 3 == 0) {
    console.log(number, "Fizz");
  } else if (number % 5 == 0) {
    console.log(number, "Buzz");
  } else {
    console.log(number);
  }
}
