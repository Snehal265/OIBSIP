function convertTemperature() {
  const inputTemp = parseFloat(document.getElementById("inputTemp").value);
  const inputUnit = document.getElementById("inputUnit").value;
  const outputUnit = document.getElementById("outputUnit").value;

  let celsius;

  // Convert input to Celsius
  if (inputUnit === "Celsius") {
    celsius = inputTemp;
  } else if (inputUnit === "Fahrenheit") {
    celsius = (inputTemp - 32) * 5 / 9;
  } else if (inputUnit === "Kelvin") {
    celsius = inputTemp - 273.15;
  }

  // Convert Celsius to desired output unit
  let outputTemp;
  if (outputUnit === "Celsius") {
    outputTemp = celsius;
  } else if (outputUnit === "Fahrenheit") {
    outputTemp = (celsius * 9 / 5) + 32;
  } else if (outputUnit === "Kelvin") {
    outputTemp = celsius + 273.15;
  }

  document.getElementById("outputTemp").value = outputTemp.toFixed(2);
}
