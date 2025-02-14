function addNumber(num) {
  if (result.value == "0") {
    result.value = num;
  } else {
    result.value += num;
  }
}

function operate(op) {
  if (result.value != "") {
    result.value += op;
  }
}

function calculate() {
  if (result.value !== "") {
    result.value = eval(result.value);
  }
}

function clearResult() {
  result.value = "0";
}

function deleteLast() {
  result.value = result.value.slice(0, -1);
}
