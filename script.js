// Function to format numbers with commas
function formatNumberWithCommas(number) {
    return number.toLocaleString('en-US');
}

// Function to remove commas from a formatted string (for internal calculations)
function removeCommas(numberString) {
    return numberString.replace(/,/g, '');
}

// Event listener for formatting input fields
function formatInput(event) {
    const input = event.target;
    const value = input.value;

    // Remove existing commas to handle cases where the user modifies a formatted number
    const plainNumber = removeCommas(value);

    // Convert to number and back to string with commas
    if (!isNaN(plainNumber) && plainNumber !== '') {
        input.value = formatNumberWithCommas(Number(plainNumber));
    }
}

// Calculation function
function calculateConversion() {
    // Get the values from the input fields (removing commas for internal calculations)
    const dollarAmount = parseFloat(removeCommas(document.getElementById('dollarAmount').value));
    const kipAmount = parseFloat(removeCommas(document.getElementById('kipAmount').value));
    const totalDollar = parseFloat(removeCommas(document.getElementById('totalDollar').value));

    // Validate the inputs
    if (isNaN(dollarAmount) || isNaN(kipAmount) || isNaN(totalDollar) || dollarAmount <= 0 || kipAmount <= 0 || totalDollar <= 0) {
        document.getElementById('result').innerHTML = 'Please enter valid positive numbers.';
        return;
    }

    // Calculate the conversion
    const kipPerDollar = kipAmount / dollarAmount;
    const totalKip = kipPerDollar * totalDollar;

    // Format the result with commas
    const formattedKip = formatNumberWithCommas(totalKip);

    // Display the result
    document.getElementById('result').innerHTML = `With ${formatNumberWithCommas(totalDollar)} USD, you will get <strong>${formattedKip}</strong> Kip.`;
}

// Add event listeners to input fields for formatting
document.getElementById('dollarAmount').addEventListener('input', formatInput);
document.getElementById('kipAmount').addEventListener('input', formatInput);
document.getElementById('totalDollar').addEventListener('input', formatInput);
