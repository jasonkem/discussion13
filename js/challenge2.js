document.addEventListener('DOMContentLoaded', function() {
    // Print the default billing address value to the console
    var billingAddress = document.getElementById('billing').value.trim();
    console.log(billingAddress);

    // Function to handle the checkbox state change
    function handleCheckboxChange() {
        var billingAddressValue = document.getElementById('billing').value;
        var homeAddressField = document.getElementById('home');
        var checkbox = document.querySelector('input[type="checkbox"][name="useBilling"]');

        if (checkbox.checked) {
            // Copy billing address to home address and disable home address field
            homeAddressField.value = billingAddressValue;
            homeAddressField.disabled = true;
        } else {
            // Clear and enable the home address field
            homeAddressField.value = ''; // Clear the content
            homeAddressField.disabled = false; // Enable the field
        }
    }

    // Add event listener for the checkbox change
    document.querySelector('input[type="checkbox"][name="useBilling"]').addEventListener('change', handleCheckboxChange);
});
