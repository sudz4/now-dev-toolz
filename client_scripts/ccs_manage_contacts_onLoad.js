// Hide All Variable Sets onLoad
function onLoad() {
    // Function to hide all variable sets
    function hideAllVariableSets() {
        g_form.setDisplay('add_a_new_contact', false);
        g_form.setDisplay('add_multiple_contacts', false);
        g_form.setDisplay('update_contacts', false);
        g_form.setDisplay('delete_contacts', false);
    }

    hideAllVariableSets();
}
