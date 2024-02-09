import React, { useState } from 'react';

const CheckBox = () => {
  const [checkboxes, setCheckboxes] = useState([
    { id: 1, label: 'Checkbox 1', checked: false },
    { id: 2, label: 'Checkbox 2', checked: false },
    { id: 3, label: 'Checkbox 3', checked: false },
    { id: 4, label: 'Checkbox 4', checked: false },
  ]);

 
 
  const handleSelectAll = () => {
    // Create a new array with all checkboxes checked
    const updatedCheckboxes = checkboxes.map((checkbox) => ({ ...checkbox, checked: true }));
    setCheckboxes(updatedCheckboxes);
  };

  return (
    <div>
      <h2>Checkbox List</h2>

      <ul>
        {checkboxes.map((checkbox) => (
          <li key={checkbox.id}>
            <label>
              <input
                type="checkbox"
                checked={checkbox.checked}
                onChange={() => {
                  // Toggle the checked state for the individual checkbox
                  const updatedCheckboxes = checkboxes.map((c) =>
                    c.id === checkbox.id ? { ...c, checked: !c.checked } : c
                  );
                  setCheckboxes(updatedCheckboxes);
                }}
              />
              {checkbox.label}
            </label>
          </li>
        ))}
      </ul>

      <button onClick={handleSelectAll}>Select All</button>
    </div>
  );
};

export default CheckBox;
