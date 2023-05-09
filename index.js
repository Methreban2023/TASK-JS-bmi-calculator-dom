function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻

  const bmi = (weight / (Math.pow(height, 2) / 100)) * 100;

  alert(`Hello! your BMI is ${bmi}`);

  //challenge 2:
  if (bmi < 18.5) {
    alert(`your BMI is Underweight!`);
  } else if (bmi <= 24.9) {
    alert(`your BMI is Healthy weight!`);
  } else if (bmi <= 29.9) {
    alert(`your BMI is Overweight!`);
  } else if (bmi >= 30.0) {
    alert(`your BMI is obesity!`);
  }

  //challenge 3:
  if (age >= 19 && age <= 24) {
    if (bmi >= 19 && bmi < 24) {
      alert("Healthy!");
    } else {
      alert("Not Healthy!");
    }
  } else if (age >= 25 && age <= 34) {
    if (bmi >= 20 && bmi <= 25) {
      alert("Healthy!");
    } else {
      alert("Not Healthy!");
    }
  } else if (age >= 35 && age <= 44) {
    if (bmi >= 21 && bmi <= 26) {
      alert("Healthy!");
    } else {
      alert("Not Healthy!");
    }
  } else if (age >= 45 && age <= 54) {
    if (bmi >= 22 && bmi <= 27) {
      alert("Healthy!");
    } else {
      alert("Not Healthy!");
    }
  } else if (age >= 55 && age <= 64) {
    if (bmi >= 23 && bmi <= 28) {
      alert("Healthy!");
    } else {
      alert("Not Healthy!");
    }
  } else if (age > 65) {
    if (bmi >= 24 && bmi <= 29) {
      alert("Healthy!");
    } else {
      alert("Not Healthy!");
    }
  }
}
