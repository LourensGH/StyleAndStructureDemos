// adding some funtionality with javascrip

document.getElementById('show-btn').addEventListener('click', function() {
  const content = document.getElementById('shown');
  content.classList.toggle('hidden');
});
