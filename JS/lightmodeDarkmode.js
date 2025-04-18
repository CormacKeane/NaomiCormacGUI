const body = document.querySelector('body');
const btn = document.querySelector('.btn');
const icon = document.querySelector('.btn_icon');

// Check localStorage on load
const currentMode = localStorage.getItem('mode');
if (currentMode === 'dark') {
  body.classList.add('darkmode');
  icon.classList.remove('fa-sun');
  icon.classList.add('fa-moon');
}

btn.addEventListener('click', () => {
  body.classList.toggle('darkmode');

  // Save preference to localStorage
  if (body.classList.contains('darkmode')) {
    localStorage.setItem('mode', 'dark');
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  } else {
    localStorage.setItem('mode', 'light');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  }
});
