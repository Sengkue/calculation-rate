function calculateConversion() {
    // Get the input values
    const dollarAmount = parseFloat(document.getElementById('dollarAmount').value);
    const kipAmount = parseFloat(document.getElementById('kipAmount').value);
    const totalDollar = parseFloat(document.getElementById('totalDollar').value);

    // Validate the inputs
    if (isNaN(dollarAmount) || isNaN(kipAmount) || isNaN(totalDollar) || dollarAmount <= 0 || kipAmount <= 0 || totalDollar <= 0) {
        document.getElementById('result').innerHTML = 'Please enter valid positive numbers.';
        return;
    }

    // Calculate the conversion
    const kipPerDollar = kipAmount / dollarAmount;
    const totalKip = kipPerDollar * totalDollar;

    // Display the result
    document.getElementById('result').innerHTML = `With ${totalDollar} USD, you will get <strong>${totalKip}</strong> Kip.`;
}
