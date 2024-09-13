// Debounce function
function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

// Simulate payment process
function processPayment() {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = "Payment Successful!";
}

// Debounced payment process
const debouncedPayment = debounce(processPayment, 2000); // 2000ms delay

// Attach the debounced function to the button
document.addEventListener('DOMContentLoaded', () => {
    const payButton = document.getElementById('pay-btn');
    payButton.addEventListener('click', debouncedPayment);
});

// window.onload = function () {
//     const payButton = document.getElementById('pay-btn');
//     payButton.addEventListener('click', debouncedPayment);
//   };