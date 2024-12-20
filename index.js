// DECISION MAKING //

// Ticket Pricing Code
function getTicketPrice(age) {
  if (age <= 12) {
    return "Ticket price: $10";
  } else if (age >= 13 && age <= 17) {
    return "Ticket price: $15";
  } else if (age >= 18) {
    return "Ticket price: $20";
  }
}
console.log(getTicketPrice(16));

//Weather Clothing Advisor
function clothingAdviser(temperature, isRaining) {
  if (temperature < 10) {
    return isRaining
      ? "Wear a heavy coat and take an umbrella."
      : "Wear a heavy coat.";
  } else if (temperature >= 10 && temperature <= 20) {
    return isRaining
      ? "Wear a light jacket and take an umbrella."
      : "Wear a light jacket.";
  } else {
    return isRaining
      ? "Wear summer clothes and take an umbrella."
      : "Wear summer clothes.";
  }
}
console.log(clothingAdviser(15, true));

// RECURSION //

// Fibonacci Sequence

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(6)); // Output: 8

// Power Function

function power(base, exp) {
  if (exp === 0) return 1;
  return base * power(base, exp - 1);
}
console.log(power(2, 3)); // Example usage, Output: 8
