function handleButtonClick() {
    const dropdown = document.getElementById("myDropdown");
    const selectedValue = dropdown.textContent;  // Use textContent to get the selected value
  
    if (selectedValue === "▼ SEPA") {
        // Redirect to another webpage (e.g., "sepa.html")
        window.location.href = "sepa.html";
    } else {
        // Show an "Invalid input" message
        alert("Invalid input. Please select SEPA.");
    }
  }