function BMI(weight, height) {
  let result = weight / (height * height);
  return result;
}

console.log(BMI(70, 108));
function status(bodymass) {
  if (bodymass < 18.5) {
    return "لديق نقص في الوزن";
  } else if (bodymass >= 18.5 || bodymass <= 225) {
    return "وزنك صحي";
  }
}

function calculate() {
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;

  let bmi_value = BMI(weight, height);
  let desc = Status(bmi_value);
  let box = document.getElementById("result");
  box.innerText = bmi_value + " == " + desc;
}
