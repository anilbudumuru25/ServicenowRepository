# ServiceNow Business Rule Configuration

## Business Rule Details
- **Name**: Update Incident Description with Caller Name
- **Table**: incident
- **When**: before insert or update
- **Condition**: caller_id is not empty

## Configuration Steps in ServiceNow

1. **Navigate to Business Rules**
   - Go to System Definition > Business Rules

2. **Create New Business Rule**
   - Click "New" button
   - Fill in the following details:
     - **Name**: Update Incident Description with Caller Name
     - **Table**: incident
     - **Active**: checked
     - **When**: before
     - **Insert**: checked
     - **Update**: checked
     - **Condition**: `caller_id != ""`

3. **Add the Script**
   - Copy the script from `business_rule_update_description_with_caller.js`
   - Paste it into the "Script" field

4. **Save the Business Rule**

## Script Logic
The business rule will:
- Check if the caller field is not empty
- Get the caller's display name
- Update the description field by prepending "Caller: [Name]" 
- Avoid duplicating caller information if it already exists in the description
- Preserve existing description content

## Testing
1. Create a new incident with a caller
2. Verify the description is updated with the caller's name
3. Update an existing incident with a different caller
4. Verify the description is updated accordingly
