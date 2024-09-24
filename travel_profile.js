function updateTime() {
    const options = { hour: 'numeric', minute: 'numeric', hour12: true };
    const currentTime = new Date().toLocaleTimeString('en-NG', options);
    document.querySelector('#localTime').textContent = currentTime + " local time";
  }

  // Update time immediately and set an interval to keep it updated
  updateTime();
  setInterval(updateTime, 60000);  // Update every minute