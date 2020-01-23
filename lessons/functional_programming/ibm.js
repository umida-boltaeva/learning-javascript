function bmiCalculator (weight, height) {
    
    var bmi = weight / Math.pow(height, 2);
    // bmi = Math.round(bmi);
    if(bmi < 18.5) {
        return "your BMI is " + bmi + ", so you are underweight";
    }
    else if (bmi >= 18.5 && bmi <= 24.9){
        return "your BMI is " + bmi + ", so you have a normal weight";
    }
    else if (bmi > 24.9) {
        return "your BMI is " + bmi + ", so you are overweight";
    }else{
        return "no number";
    }
}

console.log(bmiCalculator(6, 2));