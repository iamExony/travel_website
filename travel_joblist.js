// Tab switching logic
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
  });
});

// Pagination logic
document.querySelector('.previous').addEventListener('click', function() {
  alert('Previous page clicked!');
});

document.querySelector('.next').addEventListener('click', function() {
  alert('Next page clicked!');
});
