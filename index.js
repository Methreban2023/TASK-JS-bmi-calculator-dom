function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻

  //weight = prompt("please enter your wieght : ", "weight in Kilos");
  // height = prompt("please enter your height : ", "height in Centimeter");

  const bmi = (weight / (Math.pow(height, 2) / 100)) * 100;

  alert(`Hello! your BMI is ${bmi}`);

  //challenge 2:
  if (bmi < 18.5) {
    alert(`your BMI is Underweight!`);
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    alert(`your BMI is Healthy weight!`);
  } else if (bmi >= 25.0 && bmi <= 29.9) {
    alert(`your BMI is Overweight!`);
  } else if (bmi >= 30.0) {
    alert(`your BMI is obesity!`);
  }
}
