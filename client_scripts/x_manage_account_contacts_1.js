function onChange(control, oldValue, newValue, isLoading) {
    // Function to hide all variable sets
    function hideAllVariableSets() {
        g_form.setDisplay('add_contact', false);
        g_form.setDisplay('add_multiple_contacts', false);
        g_form.setDisplay('update_contacts', false);
        g_form.setDisplay('delete_contacts', false);
    }

    // If the form is loading or the value is "Nothing Nevermind", hide all variable sets
    if (isLoading || newValue == '0') {
        hideAllVariableSets();
        return;
    }

    // Hide all variable sets initially
    hideAllVariableSets();

    // Show the selected variable set based on the new value of the control
    switch (newValue) {
        case '1':  // Add Contact
            g_form.setDisplay('add_contact', true);
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


// Kinda working, but not really