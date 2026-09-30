// Question 1 : Create a program to calculate the sum of two numbers.
let num1 = 10;
let num2 = 20;
let sum = num1 + num2;
document.getElementById('num1').innerHTML = `Number 1 => ${num1}`;
document.getElementById('num2').innerHTML = `Number 2 => ${num2}`;
document.getElementById('sum').innerHTML = `Sum of ${num1} and ${num2} is ${sum}`;
// Question 2 : Create a program to calculate the difference between two numbers.
let num3 = 30;
let num4 = 40;
let sub = num3 - num4;
document.getElementById('num3').innerHTML = `Number 1 => ${num3}`;
document.getElementById('num4').innerHTML = `Number 2 => ${num4}`;
document.getElementById('sub').innerHTML = `Substraction of ${num3} and ${num4} is ${sub}`;
// Question 3 :  Create a program to calculate the product of two numbers.
let num5 = 50;
let num6 = 60;
let mul = num5 * num6;
document.getElementById('num5').innerHTML = `Number 1 => ${num5}`;
document.getElementById('num6').innerHTML = `Number 2 => ${num6}`;
document.getElementById('mul').innerHTML = `Multiplication of ${num5} and ${num6} is ${mul}`;
// Question 4 :  Write a program to divide two numbers and handle division by zero using conditional statements.
let num7 = 60;
let num8 = 6;
let div = num7 / num8;
document.getElementById('num7').innerHTML = `Number 1 => ${num7}`;
document.getElementById('num8').innerHTML = `Number 2 => ${num8}`;
if (num7 == 0 || num8 == 0) {
    document.getElementById('div').innerHTML = "You Can't Divied by Zero";
}
else {
    document.getElementById('div').innerHTML = `Division of ${num7} and ${num8} is ${div}`;
}
// Question 5 : Create a program to calculate the square and cube of a number.
let num9 = 5;
let square = num9 * num9;
document.getElementById('num9').innerHTML = `Number 1 => ${num9}`;
document.getElementById('square').innerHTML = `Square of ${num9} is ${square}`;
let cube = num9 * num9 * num9;
document.getElementById('cube').innerHTML = `Cube of ${num9} is ${cube}`;
// Question 6 : Develop a program to calculate the area of a rectangle.
let len = 30;
let width = 20;
let rec_area = len * width;
document.getElementById('len').innerHTML = `length => ${len}`;
document.getElementById('width').innerHTML = `Width => ${width}`;
document.getElementById('rec_area').innerHTML = `Area of a Rectangle is ${rec_area}`;
// Question 7 : Create a program to calculate the area of a circle.
let radius = 5;
let cir_area = 3.14 * (radius * radius);
document.getElementById('radius').innerHTML = `Radius => ${radius}`;
document.getElementById('cir_area').innerHTML = `Area of a Circle is ${cir_area}`;
// Question 8 : Write a program to convert Celsius to Fahrenheit.
let cel = 50;
let fahren = (cel * 9 / 5) + 32;
document.getElementById('cel').innerHTML = `Celsius => ${cel}`;
document.getElementById('fahren').innerHTML = `Celsius to Fahrenheit is ${fahren}`;
// // Question 9 : Develop a program to calculate Simple Interest using the formula: SI = (P × R × T) / 100.
let p = 50;
let r = 3;
let t = 30;
let si = (p * r * t) / 100;
document.getElementById('p').innerHTML = `Price => ${p}`;
document.getElementById('r').innerHTML = `Rate => ${r}`;
document.getElementById('t').innerHTML = `Time => ${t}`;
document.getElementById('si').innerHTML = `Simple Interest is ${si}`;
// Question 10 : Write a program to check whether a number is even or odd.
let num10 = 50;
document.getElementById('num10').innerHTML = `Number 1 => ${num10}`;
if (num10 % 2 === 0) {
    document.getElementById('odd_even').innerHTML = ` ${num10} is Even Number`;
}
else {
    document.getElementById('odd_even').innerHTML = ` ${num10} is Odd Number`;
}
// Question 11 : Create a program to check whether a number is positive, negative, or zero.
let num11 = 25;
document.getElementById('num11').innerHTML = `Number 1 => ${num11}`;
if (num11 === 0) {
    document.getElementById('pos_neg_zero').innerHTML = ` ${num11} is Nutral`;
}
else if (num11 > 0) {
    document.getElementById('pos_neg_zero').innerHTML = ` ${num11} is Positive Number`;
}
else {
    document.getElementById('pos_neg_zero').innerHTML = ` ${num11} is Negative Number`;
}
// Question 12 : Develop a program to find the largest of two numbers using if-else.
let num12 = 25;
let num13 = 50;
document.getElementById('num12').innerHTML = `Number 1 => ${num12}`;
document.getElementById('num13').innerHTML = `Number 2 => ${num13}`;
if (num12 > num13) {
    document.getElementById('largest_of_2').innerHTML = ` ${num12} is Largest Number`;
}
else {
    document.getElementById('largest_of_2').innerHTML = ` ${num13} is Largest Number`;
}
// Question 13 : Create a program to find the largest of three numbers using conditional statements.
let num14 = 25;
let num15 = 50;
let num16 = 70;
document.getElementById('num14').innerHTML = `Number 1 => ${num14}`;
document.getElementById('num15').innerHTML = `Number 2 => ${num15}`;
document.getElementById('num16').innerHTML = `Number 3 => ${num16}`;
if (num14 > num15) {
    if (num14 > num16) {
        document.getElementById('largest_of_3').innerHTML = ` ${num14} is Largest Number`;
    }
    else {
        document.getElementById('largest_of_3').innerHTML = ` ${num16} is Largest Number`;
    }
}
else {
    if (num15 > num16) {
        document.getElementById('largest_of_3').innerHTML = ` ${num15} is Largest Number`;
    }
    else {
        document.getElementById('largest_of_3').innerHTML = ` ${num16} is Largest Number`;
    }
}
// Question 14 : Write a program to check whether a person is eligible for voting (age ≥ 18).
let num17 = 18;
document.getElementById('num17').innerHTML = `Number 1 => ${num17}`;
if (num17 >= 18) {
    document.getElementById('eligible').innerHTML = `You are Eligible For Vote`;
}
else {
    document.getElementById('eligible').innerHTML = `You are not Eligible For Vote`;
}
// Question 15 : Write a program to check whether a person is eligible for voting (age ≥ 18).
let marks = 30;
document.getElementById('marks').innerHTML = `Marks => ${marks}`;
if (marks >= 90) {
    document.getElementById('grade').innerHTML = `A Grade`;
}
else if (marks >= 75) {
    document.getElementById('grade').innerHTML = `B Grade`;
}
else if (marks >= 50) {
    document.getElementById('grade').innerHTML = `C Grade`;
}
else {
    document.getElementById('grade').innerHTML = `Fail`;
}
// Question 16 : Write a program to check whether a person is eligible for voting (age ≥ 18).
let year = 2004;
document.getElementById('year').innerHTML = `Year => ${year}`;
if (year % 4 === 0) {
    document.getElementById('leap_year').innerHTML = `${year} is a Leap Year`;
}
else {
    document.getElementById('leap_year').innerHTML = `${year} is a not Leap Year`;
}
// Question 17 : Create a program to check whether a number is divisible by both 5 and 11.
let num18 = 30;
document.getElementById('num18').innerHTML = `Number 1 => ${num18}`;
if (num18 % 5 === 0 || num18 % 11 === 0) {
    document.getElementById('divided_by_5_11').innerHTML = `${num18} is Divided by 5 and 11`;
}
else {
    document.getElementById('divided_by_5_11').innerHTML = `${num18} is not Divided by 5 and 11`;
}
// Question 18 : Develop a simple calculator using switch statement to perform addition, subtraction, multiplication, and division.
let num19 = 20;
let num20 = 10;
let choice = 3;
document.getElementById('num19').innerHTML = `Number 1 => ${num19}`;
document.getElementById('num20').innerHTML = `Number 2 => ${num20}`;
document.getElementById('choice').innerHTML = `Choice => ${choice}`;
switch (choice) {
    case 1:
        let sum = num19 + num20;
        document.getElementById('calculator').innerHTML = `Addition of ${num19} and ${num20} is ${sum}`;
        break;
    case 2:
        let sub = num19 - num20;
        document.getElementById('calculator').innerHTML = `Subtraction of ${num19} and ${num20} is ${sub}`;
        break;
    case 3:
        let mul = num19 * num20;
        document.getElementById('calculator').innerHTML = `Multiplication of ${num19} and ${num20} is ${mul}`;
        break;
    case 4:
        let div = num19 / num20;
        document.getElementById('calculator').innerHTML = `Division of ${num19} and ${num20} is ${div}`;
        break;
    default:
        document.getElementById('calculator').innerHTML = `Invalid Choice...`;
        break;
}
// Question 19 : Write a program to calculate BMI and display the health category (Underweight, Normal, Overweight, Obese).
let weight = 40;
let height = 1.4;
let bmi = weight / (height * height);
document.getElementById('weight').innerHTML = `Weight => ${weight}`;
document.getElementById('height').innerHTML = `Height => ${height}`;
document.getElementById('bmi').innerHTML = `BMI => ${bmi}`;
if (bmi >= 30) {
    document.getElementById('bmi').innerHTML = `You are Obese`;
}
else if (bmi >= 25) {
    document.getElementById('bmi').innerHTML = `You are Overweight`;
}
else if (bmi >= 18.5) {
    document.getElementById('bmi').innerHTML = `You have Normal weight`;
}
else {
    document.getElementById('bmi').innerHTML = `You are Underweight`;
}
// Question 20 : Create a program to calculate electricity bill based on units consumed:
let unit = 150;
let amount;
document.getElementById('unit').innerHTML = `Unit => ${unit}`;
if (unit <= 100) {
    amount = 100 * 5;
    document.getElementById('elec-amount').innerHTML = `Electricity bill is ${amount}`;
}
else if (unit <= 200) {
    amount = (100 * 5) + ((unit - 100) * 7);
    document.getElementById('elec-amount').innerHTML = `Electricity bill is ${amount}`;
}
else {
    amount = (100 * 5) + (100 * 7) + ((unit - 200) * 10);
    document.getElementById('elec-amount').innerHTML = `Electricity bill is ${amount}`;
}

