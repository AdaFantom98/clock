const clock = document.querySelector('.clock');
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

// Обновление времени
function updateTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  clock.textContent = `${hours}:${minutes}:${seconds}`;
}

// Переключение темы
themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
  const isDark = body.classList.contains('dark-theme');
  themeToggle.textContent = isDark ? 'Светлая тема' : 'Темная тема';
});

// Запуск часов
updateTime();
setInterval(updateTime, 1000);