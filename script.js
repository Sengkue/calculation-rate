// Function to format numbers with commas
function formatNumberWithCommas(number) {
    return number.toLocaleString();
}

// Function to handle the real-time formatting of the input fields
function formatInputField(inputField) {
    let value = inputField.value.replace(/,/g, ''); // Remove existing commas
    if (!isNaN(value) && value !== '') {
        inputField.value = formatNumberWithCommas(parseFloat(value)); // Format and set the value with commas
    }
}

function calculateConversion() {
    // Get the input values, removing commas for calculation
    const dollarAmount = parseFloat(document.getElementById('dollarAmount').value.replace(/,/g, ''));
    const kipAmount = parseFloat(document.getElementById('kipAmount').value.replace(/,/g, ''));
    const totalDollar = parseFloat(document.getElementById('totalDollar').value.replace(/,/g, ''));

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

// Add event listeners to format the input fields as the user types
document.getElementById('dollarAmount').addEventListener('input', function() {
    formatInputField(this);
});
document.getElementById('kipAmount').addEventListener('input', function() {
    formatInputField(this);
});
document.getElementById('totalDollar').addEventListener('input', function() {
    formatInputField(this);
});
