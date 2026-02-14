function convertTemperature() {
    // 1. Get the value and the units
    const tempValue = parseFloat(document.getElementById("tempInput").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
    const resultArea = document.getElementById("resultArea");

    // 2. Validate input (check if it's a number)
    if (isNaN(tempValue)) {
        resultArea.textContent = "Please enter a valid number!";
        resultArea.style.color = "red";
        return;
    }

    // 3. Conversion Logic
    let convertedValue;
    let unitSymbol;

    // Helper: Convert everything to Celsius first
    let tempInCelsius;

    if (fromUnit === "celsius") {
        tempInCelsius = tempValue;
    } else if (fromUnit === "fahrenheit") {
        tempInCelsius = (tempValue - 32) * (5 / 9);
    } else if (fromUnit === "kelvin") {
        tempInCelsius = tempValue - 273.15;
    }

    // Helper: Convert Celsius to the target unit
    if (toUnit === "celsius") {
        convertedValue = tempInCelsius;
        unitSymbol = "°C";
    } else if (toUnit === "fahrenheit") {
        convertedValue = (tempInCelsius * 9 / 5) + 32;
        unitSymbol = "°F";
    } else if (toUnit === "kelvin") {
        convertedValue = tempInCelsius + 273.15;
        unitSymbol = "K";
    }

    // 4. Display Result (rounded to 2 decimal places)
    resultArea.style.color = "#333";
    resultArea.textContent = `${convertedValue.toFixed(2)} ${unitSymbol}`;
}