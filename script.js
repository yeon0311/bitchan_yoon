// 실시간 시계
function updateClock() {
  const now = new Date();
  const clock = document.getElementById("clock");
  clock.innerText = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);

// 방명록 저장
document.getElementById("guestbook-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("guest-name").value;
  const message = document.getElementById("guest-message").value;

  const entry = document.createElement("div");
  entry.innerHTML = `<p><strong>${name}</strong>: ${message}</p>`;
  document.getElementById("guestbook-entries").prepend(entry);

  this.reset();
});
