// Business Rule: Update Incident Description with Caller Name
// Table: incident
// When: before insert or update
// Condition: caller_id is not empty

(function executeRule(current, previous) {
    
    // Check if caller is not empty
    if (current.caller_id && !current.caller_id.nil()) {
        
        // Get the caller's name
        var callerName = current.caller_id.getDisplayValue();
        
        // Update description field with caller name
        if (callerName) {
            var currentDescription = current.description || '';
            
            // Check if description already contains caller info to avoid duplication
            if (currentDescription.indexOf('Caller: ' + callerName) === -1) {
                // Prepend caller information to description
                if (currentDescription) {
                    current.description = 'Caller: ' + callerName + '\n\n' + currentDescription;
                } else {
                    current.description = 'Caller: ' + callerName;
                }
            }
        }
    }
    
})(current, previous);
