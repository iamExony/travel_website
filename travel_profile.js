function updateTime() {
    const options = { hour: 'numeric', minute: 'numeric', hour12: true };
    const currentTime = new Date().toLocaleTimeString('en-NG', options);
    document.querySelector('#localTime').textContent = currentTime + " local time";
  }

  // Update time immediately and set an interval to keep it updated
  updateTime();
  setInterval(updateTime, 60000);  // Update every minute

  // Tab switching logic
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
  });
});