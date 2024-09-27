function calculate() {
    // Get the values from the input fields
    const unitPrice = parseFloat(document.getElementById('unitPrice').value);
    const totalAmount = parseFloat(document.getElementById('totalAmount').value);

    // Check if the inputs are valid numbers
    if (isNaN(unitPrice) || isNaN(totalAmount) || unitPrice <= 0 || totalAmount <= 0) {
        document.getElementById('result').innerHTML = 'Please enter valid positive numbers.';
        return;
    }

    // Calculate the total quantity of items
    const totalQuantity = (totalAmount / 1) * unitPrice;

    // Display the result
    document.getElementById('result').innerHTML = `You can buy <strong>${totalQuantity}</strong> eggs for $${totalAmount}.`;
}
