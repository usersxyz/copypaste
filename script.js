const copyButtons = document.querySelectorAll('.copy-button');

copyButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the individual button's value directly from the dataset
    const value = button.dataset.value;

    // Use `navigator.clipboard.writeText` to copy the content
    const successful = navigator.clipboard.writeText(value);

    if (successful) {
      console.log('Code copied successfully!');
    } else {
      alert('Failed to copy code to clipboard.');
    }
  });
});
