function toggleCheckboxes(masterCheckbox) {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(function(checkbox, index) {
        // Skip the master checkbox
        if (index !== 0) {
            checkbox.checked = masterCheckbox.checked;
        }
    });
        // Get the div element
        var priceDiv = document.querySelector('.vn-JuF');

        // Change the text based on the masterCheckbox state
        if (!masterCheckbox.checked) {
            priceDiv.innerText = '0VNĐ';
        } else {
            // Change it back to the original value if masterCheckbox is checked
            priceDiv.innerText = '25.000 VNĐ';
        }
}
