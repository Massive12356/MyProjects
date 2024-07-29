function checkOtherOption(selectElement, otherInputId, belowElementsClass) {
  const otherInput = document.getElementById(otherInputId);
  const belowElements = document.querySelector(`.${belowElementsClass}`);

  if (selectElement.value === 'other') {
    otherInput.style.display = 'block';
    belowElements.classList.add('expandedMargin');
  } else {
    otherInput.style.display = 'none';
    const otherSelect = document.getElementById('dynamicSelect');
    const otherInput1 = document.getElementById('otherInput1');
    
    // Check if both selects are not 'other' before removing the margin
    if (otherSelect.value !== 'other' && otherInput1.style.display !== 'block') {
      belowElements.classList.remove('expandedMargin');
    }
  }
}

// Add similar function for the second select
function checkOtherOption1(selectElement) {
  checkOtherOption(selectElement, 'otherInput1', 'belowElements');
}
