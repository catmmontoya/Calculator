/* **************** DO NOT EDIT THE CODE BELOW **************** */
/* ************************************************************ */
/* **************** DO NOT EDIT THE CODE BELOW **************** */

// When the Submit button is clicked, this code calls your `calculate` function
// and then inserts the result on the HTML page.
document.querySelector("#submitButton").addEventListener("click", () => {
  const result = calculate(document.querySelector("#expression").value);
  if (result !== undefined) {
    document.querySelector("#answer").innerText = result;
  }
});

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}
function power(num1, num2) {
  return num1 ^ num2;
}

function mod(num1, num2) {
  return num1 % num2;
}

function sqrt(num1) {
  return num1 ** 0.5;
}
function factorialize(num1) {
  let total = num1;
  if (num1 === 0 || num1 === 1) return 1;

  while (num1 > 1) {
    num1--;
    total = total * num1;
  }
  return total;
}

function calculate(expression) {
  const tokens = expression.split(" ");

  let op;
  let num1;
  let num2;

  if (tokens.length === 3) {
    op = tokens[1];
    num1 = Number(tokens[0]);
    num2 = Number(tokens[2]);
    if (Number.isNaN(num1) || Number.isNaN(num2)) {
      alert("These aren't numbers");
      return;
    }
  } else if (tokens.length === 2) {
    op = tokens[0];
    num1 = Number(tokens[1]);
    if (Number.isNaN(num1)) {
      return "This ain't a number";
    }
  } else {
    alert("Invalid expression! Try again!");
    return;
  }

  if (op === "+") {
    return add(num1, num2);
  } else if (op === "-") {
    return subtract(num1, num2);
  } else if (op === "*") {
    return multiply(num1, num2);
  } else if (op === "/") {
    return divide(num1, num2);
  } else if (op === "^") {
    return power(num1, num2);
  } else if (op === "%") {
    return mod(num1, num2);
  } else if (op === "sqrt") {
    return sqrt(num1);
  } else if (op === "!") {
    return factorialize(num1);
  } else {
    return "Unrecognized operator!";
  }
}

const questions = [
  "3 + 2",
  "3 - 2",
  "3 * 2",
  "9 / 3",
  "3 ^ 2",
  "6 % 2",
  "sqrt 25",
  "! 5",
];

for (question of questions) {
  console.log(calculate(question));
}
