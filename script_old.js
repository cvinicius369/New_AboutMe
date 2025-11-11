const toggleBtn = document.getElementById('theme-toggle');
const icon = toggleBtn.querySelector('i');
const banner = document.getElementById('banner');
const body = document.body;

toggleBtn.addEventListener('click', () => {
  const isDark = banner.classList.contains('dark-theme');

  if (isDark) {
    banner.classList.remove('dark-theme');
    banner.classList.add('light-theme');
    body.classList.remove('dark');
    body.classList.add('light');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  } else {
    banner.classList.remove('light-theme');
    banner.classList.add('dark-theme');
    body.classList.remove('light');
    body.classList.add('dark');
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }
});

function view_certifications(){
  window.open("./pages/certificates.html");
};
function view_hackthebox(){
  window.open("./pages/htb.html");
}
