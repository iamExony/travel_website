// Function to handle dropdowns individually
function setupCustomSelect(selectContainer) {
    const selected = selectContainer.querySelector('.select-selected');
    const optionsContainer = selectContainer.querySelector('.select-items');

    // Toggle the dropdown on click
    selected.addEventListener('click', function() {
        closeAllSelect(this);
        optionsContainer.classList.toggle('select-hide');
        selected.classList.toggle('select-arrow-active');
    });

    // Handle option selection
    selectContainer.querySelectorAll('.select-option').forEach(option => {
        option.addEventListener('click', function() {
            selected.innerHTML = this.innerHTML;
            optionsContainer.classList.add('select-hide');
            selected.classList.remove('select-arrow-active');
        });
    });
}

// Close all dropdowns when clicking outside
function closeAllSelect(element) {
    const dropdowns = document.querySelectorAll('.custom-select');
    dropdowns.forEach(dropdown => {
        const optionsContainer = dropdown.querySelector('.select-items');
        const selected = dropdown.querySelector('.select-selected');
        if (element !== selected) {
            optionsContainer.classList.add('select-hide');
            selected.classList.remove('select-arrow-active');
        }
    });
}

// Initialize all custom dropdowns
document.querySelectorAll('.custom-select-container').forEach(container => {
    setupCustomSelect(container);
});

// Close the dropdown if the user clicks outside of it
document.addEventListener('click', function(e) {
    if (!e.target.matches('.select-selected')) {
        closeAllSelect(e.target);
    }
});

const boxes = document.querySelectorAll('.option');

// Function to handle click on a box
function handleBoxActivation(box) {
    // Remove the 'active' class from all boxes and circles
    boxes.forEach(b => {
        b.classList.remove('active');
        b.querySelector('.entry').classList.remove('active');
        b.querySelector('.entry-2').classList.remove('active');
    });

    // Add 'active' class to the clicked box and its corresponding circle
    box.classList.add('active');
    box.querySelector('.entry').classList.add('active'); // Activate the inner circle
    box.querySelector('.entry-2').classList.add('active'); // Activate the inner circle
}

// Add event listeners to all boxes
boxes.forEach(box => {
    box.addEventListener('click', function() {
        handleBoxActivation(this);
    });
});