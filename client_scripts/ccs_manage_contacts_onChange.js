//Dynamic Variable Set Allocation
function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading) return;

    // Function to hide all variable sets
    function hideAllVariableSets() {
        g_form.setDisplay('add_a_new_contact', false);
        g_form.setDisplay('add_multiple_contacts', false);
        g_form.setDisplay('update_contacts', false);
        g_form.setDisplay('delete_contacts', false);
    }

    // Hide all variable sets initially
    hideAllVariableSets();

    // Show the appropriate variable set based on the new value of the control
    switch (newValue) {
        case '1':  // Add A New Contact
            g_form.setDisplay('add_a_new_contact', true);
            break;
        case '2':  // Add Multiple Contacts
            g_form.setDisplay('add_multiple_contacts', true);
            break;
        case '3':  // Update Contacts
            g_form.setDisplay('update_contacts', true);
            break;
        case '4':  // Delete Contacts
            g_form.setDisplay('delete_contacts', true);
            break;
    }
}
