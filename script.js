// Реалізувати рекурсивну функцію, яка зводить число в ступінь:
// Число, яке треба піднести до ступеню, передається як перший аргумент у функції;
// Ступінь передається як другий аргумент у функцію pow(num, degree).
// Число і ступінь вводить юзер
// Для від'ємних ступенів має рахувати (x^n = 1/x^(-n) ), для нецілих ступенів має писати помилку

let num = prompt("Enter number");

if (isNaN(num) || num === null) {
  alert("Enter please number or Goodbye");
} else {
  num = +num;
  let degree = +prompt("Enter degree");

  function getResult(num, degree) {
    if (degree < 0) {
      return 1 / getResult(num, -degree);
    } else if (degree === 0) {
      return 1;
    } else if (!Number.isInteger(degree)) {
      alert("Degree is not an integer. Please enter an integer.");
    } else {
      return degree === 1 ? num : num * getResult(num, degree - 1);
    }
  }

  alert(`Result: ${getResult(num, degree)}`);
}
