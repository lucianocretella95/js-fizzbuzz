for (let number = 1; number <= 100; number++) {
  const ul = document.querySelector("ul");
  const element = `<ul class="box box--${number}">${number}</ul>`;
  ul.innerHTML += element;
  if (number % 3 == 0 && number % 5 == 0) {
    // console.log(number, "FizzBuzz");
    ul.append("FizzBuzz");
  } else if (number % 3 == 0) {
    // console.log(number, "Fizz");
    ul.append("Fizz");
  } else if (number % 5 == 0) {
    // console.log(number, "Buzz");
    ul.append("Buzz")
  } else {
    ul.append("");
  }
}
