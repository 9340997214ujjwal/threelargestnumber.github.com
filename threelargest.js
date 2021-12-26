    // program to find the largest among three numbers.

      // Take input from the user.
      var num1 = prompt("enter the first number");
      num1 = parseFloat(num1);
      var num2 = prompt("enter the second number");
      num2 = parseFloat(num2);
      var num3 = prompt("enter the third number");
      num3 = parseFloat(num3);
      let largest;

      // check the condition.
      if (num1 >= num2 && num1 >= num3) {
        largest = num1;
      } else if (num2 >= num1 && num2 >= num3) {
        largest = num2;
      } else {
        largest = num3;
      }
      // display the largest number
      console.log("The largest number is" + largest);